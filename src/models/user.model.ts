export interface User {
    _id: string
    name: string
    balance: number
    transactions: Transaction[]
    
}

export interface Transaction{
    toId: string
    to: string
    at:number
    amount: number
}
