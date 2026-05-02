let str = "I love coding in every midnight";

str = str.replace("love", "Do");
console.log(str);   //  I Do coding in every midnight


//  Repeat method


let Str = "Hare krishna jai shree radha ";

Msg = Str.repeat(108);
console.log(Msg); //  in the output 108 times "hare krishna jai shree radha "


let msg = "   ApnaCollege   ";

msg = msg.trim().toUpperCase();
console.log(msg);//  APNACOLLEGE
msg = msg.trim().toLowerCase();
console.log(msg);   //  apnacollege


let name = "AmitGupta";
str = name.slice(4,9);
console.log(str);  //  Gupta

let Name = "KarishmaGupta";
strr = Name.indexOf("ma");
console.log(strr); // 6

strrr = Name.replace("Karishma","Chulbuliii ");
console.log(strrr);  // Chulbuliii Gupta


let NAME = "    College    ";
mee = NAME.replace("l","t").replace("l","t");     //  method chaining 
console.log(mee); //  Cottege