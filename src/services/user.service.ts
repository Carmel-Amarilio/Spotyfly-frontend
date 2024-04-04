import type { User } from "@/models/user.model"
import { storageService } from "./async-storage.service"

const USERS_KEY = 'usersDB'

export const userService = {
    getUsers,
    getUser,
    saveUser,
    getEmptyUser
}

async function getUsers(): Promise<User[]> {
    return await storageService.query(USERS_KEY)
}

function getUser(): Omit<User, '_id'> {
    return {
        name: "Puki Ben David",
        balance: 100,
        transactions: []
    }
}

async function saveUser(user: User & { _id?: string }): Promise<User> {
    return user._id ? await storageService.put(USERS_KEY, user) : await storageService.post(USERS_KEY, user)
}



function getEmptyUser(name: string): User {
    return {
        _id: '',
        name,
        balance: 100,
        transactions: []
    }
}