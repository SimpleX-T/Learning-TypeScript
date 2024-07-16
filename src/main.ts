//Arrays
const randomArr: any[] = ["Hello", 90, true];

const stringArr: string[] = ["Hello"];

const numArray: number[] = [3, 6, 3, 7];

//type
type user = {
	id: string | number;
	name: string;
	isActive?: boolean;
};

//interface
// interface Guitarist {
// 	name: string;
// 	isActive?: boolean;
// 	albums: (string | number)[];
// }

// let evh: Guitarist = {
// 	name: "Eddie",
// 	isActive: false,
// 	albums: [1984, "U74I"],
// };

// let jp: Guitarist = {
// 	name: "John",
// 	albums: ["I", "II", "III"],
// };

function greetGuitarist(guitarist: Guitarist): string {
	return `Hello ${guitarist.name}!`;
}

// console.log(greetGuitarist(evh));

// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
	F,
	D,
	C,
	B,
	A,
}

// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

// Literal types

let myName: "Mark";

let username: "Mark" | "Solomon" | "Godswill";

username = "Godswill";

// functions
const add = (a: number, b: number): number => a + b;

const logMessage = (message?: any): void => {
	message ? console.log(message) : "";
};

function subtract(c: number, d: number): number {
	return c - d;
}

type mathFunctions = (a: number, b: number) => number;

const multiply: mathFunctions = function (c, d) {
	return c * d;
};

// functions -> optional parameters

const addAll = (a: number, b: number, c?: number): number => {
	//optional values should always come last in the function
	if (typeof c !== "undefined") return a + b + c;
	return a + b;
};

//functions -> default param value
const sumAll = (a: number = 2, b: number, c: number = 10) => a + b + c;
//default values can not be used with type aliases

//function -> Rest Parameters
const total = (a: number, ...numbers: number[]): number =>
	numbers.reduce((prev, cur) => prev + cur);
// rest values should come last

const createError = (errorMessage: string) => {
	throw new Error(errorMessage);
};

// never types

const infinite = () => {
	let i = 10;
	while (true) {
		i++;
		if (i > 20) break; // without this line of code, this function will be of type - 'never'
	}
};

// Custom type guard
const isNumber = (value: any): boolean =>
	typeof value === "number" ? true : false; // this is used when we have a lot of type guards in our code

const numberOrString = (value: number | string): string => {
	if (isNumber(value)) return "number";
	if (typeof value === "string") return "string";
	return createError("This should never happen!");
};

// type casting or type assertion
type One = string;
type Two = string | number;
type Three = "Mark";

let a: One = "Tony";
let b = a as Two;

b = 9; // this happens because b has been asserted to Two (number | string)

const addOrConcat = (
	a: number,
	b: number,
	c: "add" | "concat"
): string | number => {
	if (c === "add") return a + b;
	return "" + a + b;
};

// Note: DO NOT use this type assertion too much

// Unknown -> This type is somehow like any
10 as unknown as string; // this is referred to as forced or double casting

// The DOM
const img = document.querySelector("img")!; // The '!' means 'not null', and it means that the variable will not return 'null'
const myImg = document.getElementById("myImage") as HTMLImageElement;
const Img = <HTMLImageElement>document.getElementById("myImage");

const year = document.getElementById("year") as HTMLSpanElement,
	thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

// Classes -> Inside a class, properties and methods are called 'members'

class Coder {
	// you need the property to exist in the class
	secondLang!: string; // Stay away from this unless highly required

	constructor(
		public readonly name: string,
		public music: string,
		private age: number,
		protected lang: string = "TypeScript"
	) {
		this.name = name;
		this.music = music;
		this.age = age;
		this.lang = lang;
	}
	public greet() {
		return `Hello! I am ${this.age}`;
	}
}

const Tochukwu = new Coder("Tochukwu", "Rap", 20);
//////////////////////////////////////////////////////////////

// Implementing classes with interfaces

interface Musician {
	name: string;
	instrument: string;
	play(action: string): string;
}

class Guitarist implements Musician {
	name: string;
	instrument: string;
	constructor(name: string, instrument: string) {
		this.name = name;
		this.instrument = instrument;
	}

	play(action: string): string {
		return `${this.name} ${action} the ${this.instrument}`;
	}
}

const Page = new Guitarist("Jimmy Page", "guitar");

class Peeps {
	static count: number = 0;
	static getCount(): number {
		return Peeps.count;
	}

	public id: number;
	constructor(public name: string) {
		this.name = name;
		this.id = ++Peeps.count;
	}
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

class Bands {
	private dataState: string[];

	constructor() {
		this.dataState = [];
	}

	public get data(): string[] {
		return this.dataState;
	}

	public set data(value: string[]) {
		if (
			Array.isArray(value) &&
			value.every((val) => typeof val === "string")
		) {
			this.dataState = value;
			return;
		} else {
			throw new Error("Param is not an array of strings");
		}
	}
}

const MyBands = new Bands();

MyBands.data = ["Neil Young", "Led Zep"];

console.log(MyBands.data);
