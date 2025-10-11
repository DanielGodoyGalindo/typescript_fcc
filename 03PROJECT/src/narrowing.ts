// -------------------------------------------------------------
// TypeScript Example: Type Narrowing and Type Guards
// -------------------------------------------------------------
// This code demonstrates various ways to handle different data types
// and object shapes in TypeScript using:
//  - Type narrowing with 'typeof', 'instanceof', and 'in'
//  - Interfaces to define structured types (User, Admin)
//  - Custom type predicates (e.g., 'isFish') for more precise type checks
//  - Conditional logic based on runtime type information
// -------------------------------------------------------------

// Function that takes a value which can be either a number or a string
function detectType(val: number | string) {
    // If the value is a string, convert it to lowercase and return it
    if (typeof val === "string") {
        return val.toLocaleLowerCase();
    }
    // Otherwise, it's a number — add 3 and return the result
    return val + 3;
}

// Function that takes an ID, which can be a string or null
function provideId(id: string | null) {
    // If no ID is provided (null or empty), print a message and exit the function
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    // If ID exists, convert it to lowercase and return it
    return id.toLocaleLowerCase();
}

// Interface representing a normal user
interface User {
    name: string,
    email: string
}

// Interface representing an admin user, which extends User with an extra property
interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

// Type guard function to check if an account is an Admin or a normal User
function isAdminAccount(account: User | Admin) {
    // Check if the object has the 'isAdmin' property
    if ("isAdmin" in account) {
        // If yes, return the value of 'isAdmin' (true/false)
        return account.isAdmin;
    }
}

// Function that logs information based on the type of value passed
function logValue(x: Date | string) {
    // If x is an instance of Date, log its UTC string representation
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } 
    // Otherwise, x is a string — convert it to uppercase and log it
    else {
        console.log(x.toUpperCase());
    }
}

// Type definition for a Fish object — must have a 'swim' method
type Fish = {
    swim: () => void
}

// Type definition for a Bird object — must have a 'fly' method
type Bird = {
    fly: () => void
}

// Type predicate function to check if a given pet is a Fish
function isFish(pet: Fish | Bird): pet is Fish {
    // If 'swim' exists on the object, it's a Fish
    return (pet as Fish).swim !== undefined;
}

// Function that returns the correct food based on the pet type
function getFood(pet: Fish | Bird) {
    // Use the type guard to check if the pet is a Fish
    if (isFish(pet)) {
        // If it's a Fish, return fish food
        return "fish food";
    } 
    // Otherwise, it's a Bird — return bird food
    else {
        return "bird food";
    }
}
