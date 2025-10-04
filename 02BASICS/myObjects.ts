// Creating an object
const User123 = {
    name: "Daniel",
    email: "daniel@gmail.com",
    isActive: true
}

// Typing destructuring object parameters in a function
function createUser({ name, isPaid }: { name: string, isPaid: boolean }) { }

// Or you can use a type alias to indicate what kind of values are stored in the object
type User = {
    name: string;
    isPaid: boolean;
};

// Then indicating the type of the input object. 
// You can also indicate that you're going to return an object (:{})
function createUser2({ name, isPaid }: User):{} {
    return {name: name, isPaid: isPaid}
 }

console.log(createUser2({ name: "daniel", isPaid: true })); // { name: 'daniel', isPaid: true }

// The output object can also be typed
function createCourse():{name:string, price: number} {
    return {name: "typescript", price: 99}
}

console.log(createCourse()); // { name: 'typescript', price: 99 }

export { }