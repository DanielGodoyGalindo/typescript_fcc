// Describes a contract that an object or class must implement
interface User {
    readonly dbId: number,
    userId: number,
    googleId?: number,
    email: string
    startTrial: () => string
    // startTrial(): string // this is also valid
    getCoupon(couponName: string): number
}

// Merging (or reopening) interfaces is allowed
interface User {
    country: string
}

// Then we create an object based on the declared interface
const new_user: User = {
    dbId: 22,
    userId: 789,
    email: "daniel@gmail.com",
    startTrial: () => "Trial started!",
    getCoupon: (name: "daniel10") => { return 10 },
    country: "Spain" // Included after interface merging
}

// An interface can extends another interface
interface Admin extends User {
    role: "admin" | "ta" | "learner";
}

// Then we create an object that follows the structure defined by the interface
const new_user2: Admin = {
    dbId: 10,
    userId: 111,
    email: "user@gmail.com",
    startTrial: () => "Trial started!",
    getCoupon: (name: "daniel10") => { return 10 },
    country: "Portugal",
    role: "admin"
}

export {}