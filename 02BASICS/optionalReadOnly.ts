type User = {
    readonly id: number, // it can't be changed once the object is created
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number // optional, not mandatory when creating an object of type User
}

let user1: User = {
    id: 1234,
    name: "Daniel",
    email: "daniel@gmail.com",
    isActive: false,
    // creditCardDetails: 111222333 // this is optional
}

user1.name = "Pepito" // this is allowed
// user1.id = 5678; // Cannot assign to 'id' because it is a read-only property.

// Defining type aliases separately
// You can combine them into a single type alias
type CardNumber = {
    cardNum: number
}

type CardDate = {
    date: string
}

// Combining all the credit card related types
type CardDetails = CardNumber & CardDate & {
    cvv: number
}

// Declaring an object of type CardDetails
let creditCard1: CardDetails = {
    cardNum: 123456789,
    date: "01/01/2025",
    cvv: 9999
}