import type { Contact, ContactFilter } from "@/models/contact.model";
import { contactService } from "@/services/contact.service"

interface State {
    contacts: Contact[];
}

export default {
    state(): State {
        return {
            contacts: [],
        }
    },
    mutations: {
        setContact(state: State, { contacts }: State) {
            state.contacts = contacts
        },
        removeContact(state: State, { contactId }: {contactId: string}) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        },
        addContact(state: State, { contact }: {contact: Contact}) {
            state.contacts.push(contact)
        },
        updateContact(state: State, { contact }: {contact: Contact}) {
            const idx = state.contacts.findIndex(c => c._id === contact._id)
            state.contacts.splice(idx, 1, contact)
        }

    },
    actions: {
        async loadContact({ commit }: { commit: Function }, { filter }: {filter: ContactFilter}) {
            try {
                const contacts = await contactService.query(filter)
                commit({ type: 'setContact', contacts })

            } catch (error) {
                console.log(error);
            }
        },

        async removeContact({ commit }: { commit: Function }, { contactId }: {contactId: string}) {
            try {
                await contactService.remove(contactId);
                commit({ type: 'removeContact', contactId })
            } catch (error) {
                console.log(error);
            }

        },

        async saveContact({ commit }: { commit: Function }, { newContact }: {newContact: Contact}) {
            try {
                const contact = await contactService.save(newContact);
                newContact._id ? commit({ type: 'updateContact', contact }) : commit({ type: 'addContact', contact })
            } catch (error) {
                console.log(error);
            }
        }

    },
    getters: {
        contacts(state: State): Contact[] { return state.contacts },
    }
}