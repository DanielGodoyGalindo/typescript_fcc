// Example of a union type: accepts numbers or strings
let score: number | string = 33;

// Both a number and a string assignment are valid
score = 44;
score = "55";

type User = {
    id: number,
    name: string
}

type Admin = {
    id: number,
    username: string
}

// The variables can store an object of type User or Admin
let user1: User | Admin = { id: 123, name: "daniel" };
let user2: User | Admin = { id: 123, username: "admin" };

function getDataFromDB(id: number | string) {
    // id.toUpperCase(); // Property 'toUpperCase' does not exist on type 'string | number'.
    if (typeof id === "string") {
        id.toUpperCase(); // now I can call a string method
    }
    // let sum = id + 2; // Operator '+' cannot be applied to types 'string | number' and 'number'.
    if (typeof id === "number") {
        let sum = id + 2; // now this operation is accepted
    }
    // making some API calls
    const data = `here is the data from id ${id}`;
    return data
}

getDataFromDB(1);
getDataFromDB("1");

// Union type in Arrays

// All values should be numbers
const data: number[] = [1, 2, 3];
// All values should be strings
const data2: string[] = ["1", "2", "3"];
// All values should be strings or numbers, but not mixed (not allowed)
// const data3: string[] | number[] = [1, 2, 3, "4"];
// Values could be strings or numbers, mixed (allowed)
const data4: (string | number)[] = ["1", 2, 3, "4"]


// Union type for specific string values
// The variable is only allowed to have one of the predefined strings
const errorMsg: "error" | "info" | "ok" = "ok";

export {}