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
console.log(Vehicle);  // 'Tractor',  'BMW','THAR',  'RR','Toyota', 'Ferarii', 'Lemborgini', 'Xuv'

Vehicle.shift()
console.log(Vehicle);  // 'BMW', 'THAR', 'RR', 'Toyota', 'Ferarii', 'Lemborgini', 'Xuv


// example of when your focusllower going to blocked bu u

let Followers = [" A", "b", "c", "D"];

let Blocked = Followers.shift();

console.log(Followers);  // After blocke(shift()) user
console.log("I Am Blocked By yoU :",Blocked);   // blockrd user



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
console.log(Month);  //  [ 'july', 'june', 'march', 'August' ]

// **********Some more method *********

let Primary = ["Red", "Yellow", "Green"];

mee = Primary.indexOf("Yellow");

me = Primary.indexOf("Green");

meee = Primary.indexOf("red")

console.log(mee); // the output is : 1
console.log(me);  // the output is : 2
console.log(meee);// the output is : -1

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
let Secondary = ["Orange", "Red", "Lavender","Pink"];

Add = primary.concat(Secondary);
console.log(Add); //  ['Blue',  'Yellow','Green', 'Orange','Red',   'Lavender','Pink']


// **********Reverce method**********

Rev = Secondary.reverse();
console.log(Rev); // [ 'Pink', 'Lavender', 'Red', 'Orange' ]

reverse = Primary.reverse();
console.log(reverse)  // [ 'Green', 'Yellow', 'Red' ]

// ******


