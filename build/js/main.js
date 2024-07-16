"use strict";
//Arrays
const randomArr = ["Hello", 90, true];
const stringArr = ["Hello"];
const numArray = [3, 6, 3, 7];
let evh = {
    name: "Eddie",
    isActive: false,
    albums: [1984, "U74I"],
};
let jp = {
    name: "John",
    albums: ["I", "II", "III"],
};
function greetGuitarist(guitarist) {
    return `Hello ${guitarist.name}!`;
}
// console.log(greetGuitarist(evh));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["F"] = 0] = "F";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
// Literal types
let myName;
let username;
username = "Godswill";
// functions
const add = (a, b) => a + b;
const logMessage = (message) => {
    message ? console.log(message) : "";
};
function subtract(c, d) {
    return c - d;
}
const multiply = function (c, d) {
    return c * d;
};
// functions -> optional parameters
const addAll = (a, b, c) => {
    //optional values should always come last in the function
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
//functions -> default param value
const sumAll = (a = 2, b, c = 10) => a + b + c;
//default values can not be used with type aliases
//function -> Rest Parameters
const total = (a, ...numbers) => numbers.reduce((prev, cur) => prev + cur);
// rest values should come last
const createError = (errorMessage) => {
    throw new Error(errorMessage);
};
// never types
const infinite = () => {
    let i = 10;
    while (true) {
        i++;
        if (i > 20)
            break; // without this line of code, this function will be of type - 'never'
    }
};
// Custom type guard
const isNumber = (value) => typeof value === "number" ? true : false; // this is used when we have a lot of type guards in our code
const numberOrString = (value) => {
    if (isNumber(value))
        return "number";
    if (typeof value === "string")
        return "string";
    return createError("This should never happen!");
};
let a = "Tony";
let b = a;
b = 9; // this happens because b has been asserted to Two (number | string)
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
// Note: DO NOT use this type assertion too much
// Unknown -> This type is somehow like any
10; // this is referred to as forced or double casting
// The DOM
const img = document.querySelector("img"); // The '!' means 'not null', and it means that the variable will not return 'null'
const myImg = document.getElementById("myImage");
const Img = document.getElementById("myImage");
const year = document.getElementById("year"), thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
// Classes -> Inside a class, properties and methods are called 'members'
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    greet() {
        return `Hello! I am ${this.age}`;
    }
}
const Tochukwu = new Coder("Tochukwu", "Rap", 20);
console.log(Tochukwu);
console.log(Tochukwu.music);
console.log(Tochukwu.greet());
