//    **********Array in pop() method**********

let Vehicle = ["BMW", "THAR", "RR"];
Vehicle.push("Toyota");
console.log(Vehicle);
Vehicle.push("Ferarii");
console.log(Vehicle);
Vehicle.push("Lemborgini");
console.log(Vehicle);
Vehicle.push("Xuv");
console.log(Vehicle);
Vehicle.push("Audi");
console.log(Vehicle);

//********** Array in pop() method**********

Vehicle.pop();
console.log(Vehicle);

console.log(Vehicle.length);

// **********Array in unshift() method**********

Vehicle.unshift("Tractor");
console.log(Vehicle); // 'Tractor',  'BMW','THAR',  'RR','Toyota', 'Ferarii', 'Lemborgini', 'Xuv'

Vehicle.shift();
console.log(Vehicle); // 'BMW', 'THAR', 'RR', 'Toyota', 'Ferarii', 'Lemborgini', 'Xuv

// example of when your focusllower going to blocked bu u

let Followers = [" A", "b", "c", "D"];

let Blocked = Followers.shift();

console.log(Followers); // After blocke(shift()) user
console.log("I Am Blocked By yoU :", Blocked); // blockrd user

// practice example

// Start :["Jaunary", "july", "march", "August"];

// Final :["july", "june", "march", "august"];

let Month = ["Jaunary", "july", "march", "August"];

// Month[0] = "july";
// Month[1] = "june";

// console.log(Month);

Month.shift();
// console.log(Month);
Month.shift();
// console.log(Month);
Month.unshift("june");
// console.log(Month);
Month.unshift("july");
console.log(Month); //  [ 'july', 'june', 'march', 'August' ]

// **********Some more method *********

let Primary = ["Red", "Yellow", "Green"];

mee = Primary.indexOf("Yellow");

me = Primary.indexOf("Green");

meee = Primary.indexOf("red");

console.log(mee); // the output is : 1
console.log(me); // the output is : 2
console.log(meee); // the output is : -1

chak = Primary.includes("Red");
console.log(chak);
chake = Primary.includes("red");
console.log(chake);
chak = Primary.includes("Yellow");
console.log(chak);
chake = Primary.includes("green");
console.log(chake);

//   **********Concat method**********

let primary = ["Blue", "Yellow", "Green"];
let Secondary = ["Orange", "Red", "Lavender", "Pink"];

Add = primary.concat(Secondary);
console.log(Add); //  ['Blue',  'Yellow','Green', 'Orange','Red',   'Lavender','Pink']

// **********Reverce method**********

Rev = Secondary.reverse();
console.log(Rev); // [ 'Pink', 'Lavender', 'Red', 'Orange' ]

reverse = Primary.reverse();
console.log(reverse); // [ 'Green', 'Yellow', 'Red' ]

// ******Slice method******

let Things = [
  "Books",
  "Blue",
  "Yellow",
  "Green",
  "Orange",
  "Red",
  "Lavender",
  "Pink",
  "Jaunary",
  "july",
  "march",
  "August",
];
 th1 = Things.slice(2);
 console.log(th1);
 th2 = Things.slice(2,6);
 console.log(th2);  // [ 'Yellow', 'Green', 'Orange', 'Red' ]

 th3 = Things.slice(-2);
 console.log(th3); //  [ 'march', 'August' ]

 th5 = Things.slice();
 console.log(th5);  // [ 'Books',    'Blue','Yellow',   'Green','Orange',   'Red','Lavender', 'Pink','Jaunary',  'july','march',    'August ]

                //    *****Splice method*******

let Animal = ["lino","Rabbit","wolf","fox","dear","zebra","Elephamt","Dragon"];
A1 = Animal.splice(4);
console.log(A1);  // [ 'dear', 'zebra', 'Elephamt', 'Dragon' ]

A2 = Animal.splice(0,2);
console.log(A2);     //  [ 'lino', 'Rabbit' ]
A3 = Animal.splice(4);
console.log(A1);  //  [ 'dear', 'zebra', 'Elephamt', 'Dragon' ]

Animal.splice(2 ,0, "calf", "Cow" );

console.log(Animal)//  [ 'wolf', 'fox', 'calf', 'Cow' ]

Animal.splice(4 ,0 , "bear");
console.log(Animal);  //   [ 'wolf', 'fox', 'calf', 'Cow', 'bear' ]

//  *********Sort method**********

let person = ["ram", "shyam","nikhil","suresh","sita","rita","Boo"],
pe=person.sort();
console.log(pe);

let number = [2,4,1,66,22,77,23,34,34,56,65,43,35,65,34,765,543,335,566];

short = number.sort();
console.log(short);  
// only Sring and char can gave u accurate sort cause 
// pehele string me conver krta hai fir hme output deta hai
//  pehele UTF16 ke undr yani string ke undr jake fir output deta hai 



//****practice */
// before : ["jaunary","july","March","august"];

// after : [ 'july', 'june', 'March', 'august' ]

let month = ["jaunary","july","March","august"];

month.splice(0,2 ,"july","june");

console.log(month); //  [ 'july', 'june', 'March', 'august' ]



// example

let ProgrammingLanguage = ["C++","JAVA","PYTHON","c#","c","html","javascript","sql"];

correct = ProgrammingLanguage.reverse();
console.log(correct);
//[ 'sql', 'javascript', 'html', 'c', 'c#', 'PYTHON', 'JAVA', 'C++' ]

correct = ProgrammingLanguage.reverse().indexOf("javascript");
console.log(correct);  //  6
