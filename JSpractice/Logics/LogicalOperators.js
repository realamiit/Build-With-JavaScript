let marks =  82;
 
//   (&&) AND operator only both are true than it return true otherwise false
if(marks >= 35 && marks >= 68){
    console.log("Pass");
    console.log("Grade:A+");
    console.log("He Deserv Gift");
}else
    console.log("Better Luck Next Time");


    //  (||) or operator only both are false than tit will gave false otherwise any condation it returns true 
if(marks <= 35 || marks <= 68){
    console.log("Pass");
    console.log("Grade:A+");
    console.log("He Deserv Gift");
}else
    console.log("Better Luck Next Time");

//  (!) NOT operatorfalse != true , true != false return True  and true != true ,Flase != False returns False
if(marks <= 35 != marks >= 68){
    console.log("Pass");
    console.log("Grade:A+");
    console.log("He Deserv Gift");
}else
    console.log("Better Luck Next Time");


// this is allso NOT operater formete
if(!(marks >= 68)){
    console.log("Pass");
    console.log("Grade:A+");
    console.log("He Deserv Gift");
}else
    console.log("Better Luck Next Time");


    // another example

    if((marks >= 35 && marks >= 68) || !false) {
    console.log("Pass"); // pass
    }