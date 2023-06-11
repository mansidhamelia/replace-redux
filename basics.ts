// primitives: number, string, boolean

let age: number;
age = 12;

let username: string;
username = 'Mansi';

let isInstructor: boolean;
isInstructor = true;

let abc: null;  //can not assign any type of value

// more complex types

let hobbies: string[];
hobbies = ['sports', 'Cooking'];

// type aliases
type Person = {
    name: string,
    age: number
}

let xyz: any;  //anything can allowed such as object

let person: Person

person = {
    name: 'Mansi',
    age: 22
};

// let person: {
//     isEmployee: boolean
// }
// person = {
//     isEmployee: true
// }

let people: Person[];

// Type inference

let course: string | number = 'React - typescript guide';
course = 12345




