
// You can specify both the input and output types of the function
function addTwo(num: number): number {
    // return "hello"; // Type 'string' is not assignable to type 'number'
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) { }
let loginUser = (name: string, email: string, isPaid: boolean = false) => { }

addTwo(5);
getUpper("hello");
signUpUser("daniel", "daniel@gmail.com", false);
loginUser("name", "email@gmail.com");

// You can specify more than one output type
function getValue(myVal: number): boolean | string {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}

// Arrow function
const getHello = (s: string): string => {
    return "hello"
}

// Typing the parameter in the callback function
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero: string) => {
    console.log(`hero is ${hero}`);
})

// Type the output as void when a function doesn't return a value
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// Type the output as never when the function never returns (e.g. throws an error)
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export { }