// premitive
// 7 types: String, Number, Bollean , Null, Undefiend, Symbol, BigInt

// Reference (Non Premitive)
 // Array, Object, Functions

 const score = 2000;

const ScoreValue = 544.34;
const rollNum = 2122239756;
const isLoggedIN = false;
const outsideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);


const BigNumber = 1223325344355444n;

console.log(BigNumber);



//Array creating
const Heros= ["Shaktiman", "Nagaraj", "spiderman"]
// creating Object
let myObj = {
    name: "AMit",
    class: "BCA",
    age: 22,
}

// function

const myFunction = function(){
    console.log("Hello world");
}


// find Datatypes any value

console.log(typeof  BigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3
// here we see which types of dtatype by the using typeof function or obj name by the which type of value store in data or obj, function 


// --&&&&&&&&&&&&&&&&&&&&&77------

// stack (premitive) , Heap (non-Premitive)


let myindtagramename = "realamiit";
let anothername = "meAmdYuou";
console.log(myindtagramename);
console.log(anothername);


let userOne = {
    email:"amit@gmail.com",
    upi: "realamiit@ubino",
}
let userTwo = userOne

userTwo.email = "amit@google.com"

console.log(userOne.email);
console.log(userTwo.email)