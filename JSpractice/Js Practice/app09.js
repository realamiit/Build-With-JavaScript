let name = "AmitGupta";
let age = 22;
let cgpa = 8.7;
let marks;   // marks me value nhi diya isse bhi undefiend value mil jayeaga
let girlfriend = null;
let  isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof cgpa);
console.log(typeof marks);
console.log(typeof girlfriend);  // the output in object because reason niche de rha hu 
console.log(typeof isStudent)

console.log(girlfriend === null );   //   true
// iska main reason hai null null and we know the null ka binary code hota hai (000) aur (000) iska mtlb hota hai object thats why 
// javascript ne null ka mtlb Object smjh liya thats it nothing else   