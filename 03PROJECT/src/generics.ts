const score: Array<number> = [];
const names: Array<string> = [];

/////////////////// Generics with functions

// Example 1: This function accepts only boolean OR number values
// and returns the same type. But it's limited to those two.
function identity1(val: boolean | number): boolean | number {
    return val;
}

// Example 2: Using 'any' removes all type safety.
// The compiler won't check or infer any type here — not recommended.
function identity2(val: any): any {
    return val;
}

// Example 3: Generic function — 'Type' is a placeholder for any data type.
// When the function is called, 'Type' is replaced by the actual type passed.
function identity3<Type>(val: Type): Type {
    return val;
}

identity3("hello"); // Type = "hello" → returns a string
identity3(true);    // Type = true → returns a boolean

// Example 4: Same concept, using a shorter and more common generic name 'T'.
// 'T' can represent any type (string, number, object, etc.)
// and the return type will always match the input type.
function identity4<T>(value: T): T {
    return value;
}

// Example of using a custom type with a generic function
interface Bottle {
    brand: string;
    id: number;
}

/////////////////// Generics with arrays

// Here 'T' becomes 'Bottle', so the function now expects and returns a 'Bottle' type.
identity4<Bottle>({ brand: "Fanta", id: 123 });

// Generic function that returns the first element of an array
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

const numbers = [10, 20, 30];
const fruits = ["apple", "banana", "cherry"];

console.log(getFirstElement(numbers)); // 10
console.log(getFirstElement(fruits));  // "apple"


/////////////////// Generics with arrays 2

// A generic function that works with arrays of any type <T>
function getSearchProducts<T>(products: T[]): T {
    // Simulate some database operations or filtering logic
    const myIndex = 3;

    // Return the element at index 3
    // The '!' (non-null assertion operator) tells TypeScript that we are sure
    // the value is NOT undefined. Be careful: if the array has fewer than 4 elements,
    // this will throw a runtime error.
    return products[myIndex]!;
}


/////////////////// Generics with arrow function

// The same logic as above, but using an arrow function syntax
// <T> defines a generic type parameter so this function can handle arrays of any type
const getMoreSearchProducts = <T>(products: T[]): T => {
    // Simulate some database or API operations
    const myIndex = 4;

    // Return the element at index 4, asserting it exists
    return products[myIndex]!;
};


///////////////////// Filter objects by generic property

// Generic function that filters an array of objects by a specific property and value
function filterByProperty<T, K extends keyof T>(
    items: T[],   // Array of objects
    key: K,       // Property name (must be a valid key of T)
    value: T[K]   // Value to match (must be the same type as the property)
): T[] {
    return items.filter(item => item[key] === value);
}

// Example data
interface User {
    id: number;
    name: string;
    isAdmin: boolean;
}

const users: User[] = [
    { id: 1, name: "Alice", isAdmin: true },
    { id: 2, name: "Bob", isAdmin: false },
    { id: 3, name: "Charlie", isAdmin: true },
];

// Use the generic function
const admins = filterByProperty(users, "isAdmin", true);
console.log(admins);
// [
//   { id: 1, name: "Alice", isAdmin: true },
//   { id: 3, name: "Charlie", isAdmin: true }
// ]

const bob = filterByProperty(users, "name", "Bob");
console.log(bob);
// [{ id: 2, name: "Bob", isAdmin: false }]



//////////////// Example with generics, an interface, and a function

// Define a basic interface that represents a database connection
interface Database {
    connection: string,
    username: string,
    password: string
}

// A generic function that accepts two parameters:
// - T: a generic type (can be anything)
// - U: a generic type that must extend the Database interface
// This means U must have all the properties of Database
function anotherFunction<T, U extends Database>(val1: T, val2: U): object {
    // Returns both values inside an object
    return { val1, val2 }
}

// Example call: val1 is a number, val2 is an object that matches Database
anotherFunction(3, { connection: "hey", username: "you", password: "bye" })


///////////////// Example with generics and a class

// Define an interface for a Quiz object
interface Quiz {
    name: string,
    family: string
}

// Define another interface for a Course object
interface Course {
    name: string,
    author: string,
    subject: string
}

// A generic class that can handle a list (cart) of any type T
class Syllable<T> {
    // Property to store an array of type T
    public cart: T[] = []
    
    // Method to add a new item (of type T) to the cart
    addToCart(product: T) {
        this.cart.push(product)
    }
}

// Example usage:
// You could create a Syllable for quizzes or for courses
// const quizCart = new Syllable<Quiz>()
// quizCart.addToCart({ name: "Math Quiz", family: "Algebra" })

// const courseCart = new Syllable<Course>()
// courseCart.addToCart({ name: "TS Basics", author: "John", subject: "TypeScript" })
