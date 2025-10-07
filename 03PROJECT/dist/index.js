// Defining a class
// class User {
//     email: string;
//     name: string;
//     city: string = ""; // this is defined before the constructor
//     private gender: string;
//     constructor(email: string, name: string, gender: string) {
//         this.email = email;
//         this.name = name;
//         this.gender = gender;
//     }
// }
// More compact
class User {
    constructor(
    // Public properties – accessible from outside the class
    email, name, 
    // Protected property – accessible within the class and its subclasses
    age, 
    // Private property – only accessible within the class
    gender, 
    // Default value assigned to 'city' if not provided
    city = "") {
        this.email = email;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.city = city;
    }
    // Public getter: returns the user's email. Used as a property: user.getEmail
    get getEmail() {
        return this.email;
    }
    // Public getter: returns the private property 'gender'
    get getGender() {
        return this.gender;
    }
    // Public setter: updates the user's name. Used as a property: user.setName = "NewName"
    set setName(name) {
        this.name = name;
    }
    // Private method: only accessible inside the class
    getCity() {
        return this.city;
    }
}
// Creating and using a User instance
const new_user = new User("daniel@gmail.com", "Daniel", 39, "Male");
new_user.city = "Zaragoza";
console.log(new_user); // User {email: 'daniel@gmail.com', name: 'Daniel', gender: 'Male', city: 'Zaragoza'}
console.log(new_user.getEmail); // daniel@gmail.com
console.log(new_user.getGender); // Male
console.log(new_user.name); // Daniel
new_user.setName = "Pepito"; // Use the setter (no parentheses)
console.log(new_user.name); // Pepito
// new_user.getCity(); // Property 'getCity' is private and only accessible within class 'User'.
// new_user.gender; // Property 'gender' is private and only accessible within class 'User'.
class SubUser extends User {
    constructor(email, name, age, gender, city, isFamily // Adds a new public property specific to SubUser
    // When adding new properties in a subclass constructor, 
    // they must be declared here before calling super()
    ) {
        // Call the parent (User) constructor first
        // This initializes the properties defined in the User class
        super(email, name, age, gender, city);
        this.isFamily = isFamily;
    }
}
const new_subuser = new SubUser("holahola@hotmail.com", "John Doe", 52, "Male", "L.A", false);
console.log(new_subuser); // SubUser {email: 'holahola@hotmail.com', name: 'John Doe', age: 52, gender: 'Male', city: 'L.A', isFamily: false, getEmail: (...),getGender: (...)}
export {};
//# sourceMappingURL=index.js.map