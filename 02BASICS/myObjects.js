"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Creating an object
var User123 = {
    name: "Daniel",
    email: "daniel@gmail.com",
    isActive: true
};
// Typing destructuring object parameters in a function
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
}
// Then indicating the type of the input object. You can also indicate that you're 
// going to return an object (:{})
function createUser2(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    return { name: name, isPaid: isPaid };
}
console.log(createUser2({ name: "daniel", isPaid: true }));
// The output object can also be typed
function createCourse() {
    return { name: "typescript", price: 99 };
}
console.log(createCourse());
