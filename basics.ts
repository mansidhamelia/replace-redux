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

let xyz: any;  //anything can allowed such as object

let person: {
    name: string,
    age: number
}

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

let people: {
    name: string,
    age: number
}[];

// Type inference

let course = 'React - typescript guide';
// course = 123456  //cannot assign


