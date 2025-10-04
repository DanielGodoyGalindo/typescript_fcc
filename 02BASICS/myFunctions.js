"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// You can specify both the input and output types of the function
function addTwo(num) {
    // return "hello"; // Type 'string' is not assignable to type 'number'
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("hello");
signUpUser("daniel", "daniel@gmail.com", false);
loginUser("name", "email@gmail.com");
// You can specify more than one output type
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
// Arrow function
var getHello = function (s) {
    return "hello";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    console.log("hero is ".concat(hero));
});
