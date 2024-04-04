import type { Contact, ContactFilter } from "@/models/contact.model"
import { contactBackService } from "./contactService"

const contact = {
    _id: "I6ebsuqLXN",
    name: "Doris Aubut",
    email: "LSjaardema@tortor.gov",
    phone: "(774)563-9173"
}

export const contactService = {
  query,
  getById,
  remove,
  save,
  getEmptyContact
}

async function query(filter : ContactFilter | null = null) :Promise<Contact[]>{
    return await contactBackService.getContacts(filter)
}

async function getById(constId: string):Promise<Contact>{
    return await contactBackService.getContactById(constId)
} 

async function remove(constId: string) :Promise<Contact[]>{
    return await contactBackService.deleteContact(constId)
} 

async function save(contact: Contact):Promise<Contact>{
    return await contactBackService.saveContact(contact)
}

function getEmptyContact() : Omit<Contact, '_id'>{
    return {
        name: '',
        email: '',
        phone: ''
    }
}

