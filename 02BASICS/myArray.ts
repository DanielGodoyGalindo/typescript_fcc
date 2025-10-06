// Declare an empty array containing strings
const superHeroes: string[] = []

// Declare an empty array that contains numbers
const heroPower: Array<number> = []

// Declare an empty array with a type
type User = {
    name: string,
    isActive: boolean
}

const allUsers: User[] = []

superHeroes.push("spiderman")
heroPower.push(2)
allUsers.push({name:"daniel",isActive: false})
console.log(allUsers);

export {}