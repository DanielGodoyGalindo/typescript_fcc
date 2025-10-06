// Declaration of a tuple
const user: (string | number)[] = [1, "daniel"]

// Declaration of a tuple with three elements
let user2: [string, number, boolean];
// The order of the values has to be the same as the declaration
user2 = ["daniel", 123, true];

// Another tuple example
let rgb: [number, number, number] = [255, 127, 255];

// Defining a tuple type
type User = [number, string];
const newUser: User = [444, "hello@gmail.com"];
// const newUSer2: User = ["bye", 666]; // Not allowed: types and order must match the definition

export { }