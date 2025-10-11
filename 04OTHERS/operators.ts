//////////////////////////////////
// Optional Chaining Operator (?.)
//////////////////////////////////

// Define a User type with an optional nested 'address' object
type User = {
    id: number;
    name: string;
    email: string;
    address?: {
        city?: string;
        street?: string;
    };
};

// User without an address
const user1: User = {
    id: 123,
    name: "Daniel",
    email: "daniel123@gmail.com"
};

// The optional chaining operator (?.) prevents errors
// If 'address' is undefined, this will safely return 'undefined'
// instead of throwing an error.
console.log(user1.address?.city); // Output: undefined

// User with an address
const user2: User = {
    id: 456,
    name: "Lucía",
    email: "lucia@gmail.com",
    address: { city: "Madrid", street: "Gran Vía" }
};

// Since 'address' and 'city' exist, this will return the value.
console.log(user2.address?.city); // Output: "Madrid"


///////////////////////////////////
// Nullish Coalescing Operator (??)
///////////////////////////////////

// This operator returns the right-hand value only if the left-hand value
// is null or undefined — it does NOT trigger for false, 0, or empty strings.

function printUsername(name?: string | null) {
    // If 'name' is null or undefined, use "Anonymous" as a default
    const username = name ?? "Anonymous";
    console.log(`Welcome, ${username}!`);
}

printUsername("Daniel");   //  "Welcome, Daniel!"
printUsername(undefined);  // "Welcome, Anonymous!"
printUsername(null);       // "Welcome, Anonymous!"

// 💡 Difference between ?? and ||
// The logical OR operator (||) treats falsy values (like "" or 0) as false,
// while ?? only checks for null or undefined.

const input1 = "";
const input2 = 0;

console.log(input1 || "No input"); // "No input" (because "" is falsy)
console.log(input1 ?? "No input"); // "" (because it's not null or undefined)

console.log(input2 || 100); // 100 (because 0 is falsy)
console.log(input2 ?? 100); // 0 (because 0 is a valid value)

////////////////////////////////////////////////////////////
// Optional Chaining with Functions (?.()) and Arrays (?.[])
////////////////////////////////////////////////////////////


//////////// ?.() → Optional function call

type UserType = {
    name: string;
    greet?: () => void; // Optional function
};

const user3: UserType = {
    name: "Daniel",
    greet: () => console.log("Hello from Daniel!")
};

const user4: UserType = {
    name: "Lucía"
};

// ?.() checks if 'greet' exists before calling it
user3.greet?.(); // "Hello from Daniel!"
user4.greet?.(); // No error, does nothing (greet is undefined)


//////////// ?.[] → Optional element or property access

const users: UserType[] | undefined = [
    { name: "Daniel" },
    { name: "Lucía", greet: () => console.log("Hi!") }
];

// Access the second element safely
console.log(users?.[1].name); // "Lucía"

// If 'users' were undefined, this would safely return 'undefined'
const emptyList: User[] | undefined = undefined;
console.log(emptyList?.[0]); // No error, prints 'undefined'