import type { Transaction, User } from "@/models/user.model";
import { userService } from "@/services/user.service"

interface State {
    users: User[];
    loggedInUser: User | null;
}

export default {
    state(): State {
        return {
            users: [],
            loggedInUser: null
        }
    },
    mutations: {
        setUsers(state: State, { users }: { users: User[] }) {
            state.users = users
        },
        setLoggedInUser(state: State, { user } : { user: User }) {
            state.loggedInUser = user
        },
        updateLoggedInUser(state: State, { transaction }: { transaction: Transaction }) {
            if(!state.loggedInUser) return
            state.loggedInUser.transactions.unshift(transaction);
            state.loggedInUser.balance -= transaction.amount;
        },
        logOut(state: State) {
            state.loggedInUser = null
        },

    },
    actions: {
        async loadUsers({ commit }: { commit: Function }) {
            try {
                const users = await userService.getUsers()
                commit({ type: 'setUsers', users })

            } catch (error) {
                console.log(error);
            }
        },

        async logIn({ state, commit }: { state: State; commit: Function }, { name }: { name: string }) {
            try {
                let user = state.users.find(user => user.name === name)
                if (!user) {
                    user = userService.getEmptyUser(name)
                    user = await userService.saveUser(user)
                }
                commit({ type: 'setLoggedInUser', user })
            } catch (error) {
                console.log(error);
            }
        },

        async transfer({ state, commit }: { state: State; commit: Function }, { transaction }: { transaction: Transaction }) {
            try {
                commit({ type: 'updateLoggedInUser', transaction })
                if(state.loggedInUser) await userService.saveUser(state.loggedInUser)
            } catch (error) {
                console.error('Error during transfer:', error);
            }
        },

        logOut({ commit }: { commit: Function }) {
            commit({ type: 'logOut' })
        }

    },
    getters: {
        loggedInUser(state: State): User | null { return state.loggedInUser; }
    }
}