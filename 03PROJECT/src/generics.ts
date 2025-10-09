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