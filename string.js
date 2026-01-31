//string
let str ="Apnacollege";
console.log(str.length);

//template literals
let name = "John";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);



///string methods
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("college"));


let fullName = prompt("Enter your full name without spaces: ");
let username ="@"+fullName+fullName.length;
console.log(username);
