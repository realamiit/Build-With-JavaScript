const num = [2,3,45,6,7];

num.push(9);
num.pop();
num.pop();
num.pop(0);

console.log(num);

newnum = num;
console.log(newnum);

const arr = ["A","B","C","D","E"];

num = arr; //Here u got error" Assignment to constant variable.
// " mtlb by  the assress the are constant that's because (num = arr) not possible 
console.log(arr);
