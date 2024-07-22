"use strict";
// //Arrays
// const randomArr: any[] = ["Hello", 90, true];
// const stringArr: string[] = ["Hello"];
// const numArray: number[] = [3, 6, 3, 7];
// //type
// type user = {
// 	id: string | number;
// 	name: string;
// 	isActive?: boolean;
// };
// //interface
// // interface Guitarist {
// // 	name: string;
// // 	isActive?: boolean;
// // 	albums: (string | number)[];
// // }
// // let evh: Guitarist = {
// // 	name: "Eddie",
// // 	isActive: false,
// // 	albums: [1984, "U74I"],
// // };
// // let jp: Guitarist = {
// // 	name: "John",
// // 	albums: ["I", "II", "III"],
// // };
// function greetGuitarist(guitarist: Guitarist): string {
// 	return `Hello ${guitarist.name}!`;
// }
// // console.log(greetGuitarist(evh));
// // Enums
// // "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
// enum Grade {
// 	F,
// 	D,
// 	C,
// 	B,
// 	A,
// }
// // Type Aliases
// type stringOrNumber = string | number;
// type stringOrNumberArray = (string | number)[];
// // Literal types
// let myName: "Mark";
// let username: "Mark" | "Solomon" | "Godswill";
// username = "Godswill";
// // functions
// const add = (a: number, b: number): number => a + b;
// const logMessage = (message?: any): void => {
// 	message ? console.log(message) : "";
// };
// function subtract(c: number, d: number): number {
// 	return c - d;
// }
// type mathFunctions = (a: number, b: number) => number;
// const multiply: mathFunctions = function (c, d) {
// 	return c * d;
// };
// // functions -> optional parameters
// const addAll = (a: number, b: number, c?: number): number => {
// 	//optional values should always come last in the function
// 	if (typeof c !== "undefined") return a + b + c;
// 	return a + b;
// };
// //functions -> default param value
// const sumAll = (a: number = 2, b: number, c: number = 10) => a + b + c;
// //default values can not be used with type aliases
// //function -> Rest Parameters
// const total = (a: number, ...numbers: number[]): number =>
// 	numbers.reduce((prev, cur) => prev + cur);
// // rest values should come last
// const createError = (errorMessage: string) => {
// 	throw new Error(errorMessage);
// };
// // never types
// const infinite = () => {
// 	let i = 10;
// 	while (true) {
// 		i++;
// 		if (i > 20) break; // without this line of code, this function will be of type - 'never'
// 	}
// };
// // Custom type guard
// const isNumber = (value: any): boolean =>
// 	typeof value === "number" ? true : false; // this is used when we have a lot of type guards in our code
// const numberOrString = (value: number | string): string => {
// 	if (isNumber(value)) return "number";
// 	if (typeof value === "string") return "string";
// 	return createError("This should never happen!");
// };
// // type casting or type assertion
// type One = string;
// type Two = string | number;
// type Three = "Mark";
// let a: One = "Tony";
// let b = a as Two;
// b = 9; // this happens because b has been asserted to Two (number | string)
// const addOrConcat = (
// 	a: number,
// 	b: number,
// 	c: "add" | "concat"
// ): string | number => {
// 	if (c === "add") return a + b;
// 	return "" + a + b;
// };
// // Note: DO NOT use this type assertion too much
// // Unknown -> This type is somehow like any
// 10 as unknown as string; // this is referred to as forced or double casting
// // The DOM
// const img = document.querySelector("img")!; // The '!' means 'not null', and it means that the variable will not return 'null'
// const myImg = document.getElementById("myImage") as HTMLImageElement;
// const Img = <HTMLImageElement>document.getElementById("myImage");
// const year = document.getElementById("year") as HTMLSpanElement,
// 	thisYear: string = new Date().getFullYear().toString();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
// // Classes -> Inside a class, properties and methods are called 'members'
// class Coder {
// 	// you need the property to exist in the class
// 	secondLang!: string; // Stay away from this unless highly required
// 	constructor(
// 		public readonly name: string,
// 		public music: string,
// 		private age: number,
// 		protected lang: string = "TypeScript"
// 	) {
// 		this.name = name;
// 		this.music = music;
// 		this.age = age;
// 		this.lang = lang;
// 	}
// 	public greet() {
// 		return `Hello! I am ${this.age}`;
// 	}
// }
// const Tochukwu = new Coder("Tochukwu", "Rap", 20);
// //////////////////////////////////////////////////////////////
// // Implementing classes with interfaces
// interface Musician {
// 	name: string;
// 	instrument: string;
// 	play(action: string): string;
// }
// class Guitarist implements Musician {
// 	name: string;
// 	instrument: string;
// 	constructor(name: string, instrument: string) {
// 		this.name = name;
// 		this.instrument = instrument;
// 	}
// 	play(action: string): string {
// 		return `${this.name} ${action} the ${this.instrument}`;
// 	}
// }
// const Page = new Guitarist("Jimmy Page", "guitar");
// class Peeps {
// 	static count: number = 0;
// 	static getCount(): number {
// 		return Peeps.count;
// 	}
// 	public id: number;
// 	constructor(public name: string) {
// 		this.name = name;
// 		this.id = ++Peeps.count;
// 	}
// }
// const John = new Peeps("John");
// const Steve = new Peeps("Steve");
// const Amy = new Peeps("Amy");
// class Bands {
// 	private dataState: string[];
// 	constructor() {
// 		this.dataState = [];
// 	}
// 	public get data(): string[] {
// 		return this.dataState;
// 	}
// 	public set data(value: string[]) {
// 		if (
// 			Array.isArray(value) &&
// 			value.every((val) => typeof val === "string")
// 		) {
// 			this.dataState = value;
// 			return;
// 		} else {
// 			throw new Error("Param is not an array of strings");
// 		}
// 	}
// }
// const MyBands = new Bands();
// MyBands.data = ["Neil Young", "Led Zep"];
// // Index Signatures -> they are useful when you're creating an object but you don't know the exact names of the object keys, and also TypeScript requires it when you attempt to access an object dynamically
// interface TransactionObj {
// 	Pizza: number;
// 	Books: number;
// 	Job: number;
// }
// const todaysTransactions: TransactionObj = {
// 	Pizza: -10,
// 	Books: -5,
// 	Job: 50,
// };
// interface Student {
// 	// [key: string]: string | number | number[] | undefined;
// 	name: string;
// 	GPA: number;
// 	classes?: number[];
// }
// const student: Student = {
// 	name: "Perpetual",
// 	GPA: -5.0,
// 	classes: [100, 200],
// };
// // for (const key in student) {
// // 	console.log(`${key}: ${student[key as keyof Student]}`);
// // }
// // Object.keys(student).map((key) => {
// // 	console.log(student[key as keyof typeof student]);
// // });
// const logStudentKey = (student: Student, key: keyof Student): void => {
// 	console.log(`Student ${key}: ${student[key]}`);
// };
// // logStudentKey(student, "GPA");
// /////////////////////////////
// interface Incomes {
// 	[key: string]: number;
// }
// type Streams = "salary" | "bonus" | "sidehustle";
// type Income = Record<Streams, number>;
// // Generics
// const echo = <T>(arg: T): T => arg;
// const isObj = <T>(arg: T): boolean => {
// 	return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
// };
// const isTrue = <E>(arg: E): { arg: E; is: boolean } => {
// 	if (Array.isArray(arg) && !arg.length) {
// 		return { arg, is: false };
// 	}
// 	return { arg, is: !!arg };
// };
////////////////////////////////////////
//canvas manipulation
const image1 = new Image();
image1.src = "../src/cat1.png";
// Manipulating Images in canvas
image1.addEventListener("load", function () {
    console.log(image1.naturalHeight);
    console.log(image1.naturalWidth);
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    // canvas.width = 960;
    // canvas.height = 960;
    canvas.width = 400;
    canvas.height = 472;
    // canvas.width = 800;
    // canvas.height = 943;
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const scannedData = scannedImage.data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Manipulating image color
    for (let i = 0; i < scannedData.length; i += 4) {
        const totalRGB = scannedData[i] + scannedData[i + 1] + scannedData[i + 2];
        const averageRGB = totalRGB / 3;
        scannedData[i] = averageRGB;
        scannedData[i + 1] = averageRGB;
        scannedData[i + 2] = averageRGB;
    }
    // ctx.putImageData(scannedImage, 0, 0);
    // Particles effect
    let particlesArray = [];
    const numberOfParticles = 5000;
    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++) {
            const red = scannedImage.data[y * 4 * scannedImage.width + x * 4];
            const green = scannedImage.data[y * 4 * scannedImage.width + x * 4 + 1];
            const blue = scannedImage.data[y * 4 * scannedImage.width + x * 4 + 2];
            const brightness = calculateRelativeBrightness(red, green, blue);
            row.push(brightness);
        }
        mappedImage.push(row);
    }
    function calculateRelativeBrightness(red, green, blue) {
        return (Math.sqrt(red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114) / 100);
    }
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 0.5;
            this.size = Math.random() * 0.5 + 1;
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
        }
        // _update(): void {
        // 	this.position1 = Math.floor(this.y);
        // 	this.position2 = Math.floor(this.x);
        // 	this.speed = mappedImage[this.position1][this.position2];
        // 	let movement = 2.5 - this.speed + this.velocity;
        // 	this.y += movement;
        // 	if (this.y >= canvas.height) {
        // 		this.y = 0;
        // 		this.x = Math.random() * canvas.width;
        // 	}
        // }
        _update() {
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            // Check if position1 and position2 are within bounds
            if (this.position1 >= 0 &&
                this.position1 < mappedImage.length &&
                this.position2 >= 0 &&
                this.position2 < mappedImage[this.position1].length) {
                this.speed = mappedImage[this.position1][this.position2];
            }
            else {
                // Handle out-of-bounds case
                this.speed = 10; // or some default value
            }
            let movement = 2.5 - this.speed + this.velocity;
            this.y += movement;
            if (this.y >= canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        // _draw(color: string = "white"): void {
        _draw() {
            ctx.beginPath();
            ctx.fillStyle = "green";
            // ctx.fillStyle = color;
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    function _init_() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }
    _init_();
    function animate() {
        // ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = "rgb(33,33,33)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2;
        // const randColor: string = `rgb(${Math.trunc(
        // 	Math.random() * 255 - 1
        // )},${Math.trunc(Math.random() * 255 - 1)},${Math.trunc(
        // 	Math.random() * 255 - 1
        // )})`;
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i]._update();
            ctx.globalAlpha = particlesArray[i].speed * 0.5;
            // particlesArray[i]._draw(randColor);
            particlesArray[i]._draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
});
