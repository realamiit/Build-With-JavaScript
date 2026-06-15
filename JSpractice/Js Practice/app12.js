let age = 20;
let hasID = true;

console.log(age >= 18 && hasID);
console.log(age < 18 || hasID);
console.log(!hasID);



// kyuki pehele wale console me age bada hai 18 se aur fir dono ko 
// compare krene se && hme pta chata hai ki ha bilkul true hai kyuki
//  condation bilkul sahi hai thats why isme eek bhi agr shi ho to pura shi hoiga || ye 
// orr operator hai iskha yhi kam hotha hai that why the output is true than
//  air thrie console me ! ye jo hai shi ko galt UER Glt ko shi kr dwega only 
// hasID tha tb sahi tha but after !hasID ke baad putput ko false dene lga kuki true thi is comdation
//  me agr eek bhi condation true hai to ye false kr dtaga hai mtlb jb hmare paas true value  
// rhrgi to true valu na deke false dega kyuki iska nature hi vaisa hai
//  kisis bhi condation me ye negative hi return krega 
// ye hai output : true
//                 true
//                 false