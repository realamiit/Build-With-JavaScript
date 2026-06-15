// Jab browser HTML file padhta hai — woh ek tree bana leta hai:

// document
//     └── html
//         ├── head
//         └── body
//             ├── h1
//             ├── p
//             └── button

// JavaScript is tree ko control kar sakti hai!
// Text change karo
// Color change karo
// Elements hide/show karo
// Click pe kuch karo

// 📝 3 Important Lines Note Karo:

// 1. Element Dhundane ke liye 
// document.getElementById("title");

// 2. Text chane kroo 
// document.getElementById("title").innerText = "Naya Text!";

// 3.Style change karo 
// document.getElementById("title").style.color = "Red";


document.getElementById("title").innerText = "JavaScript Seekh Raha Hoon!";
document.getElementById("title").style.fontSize = "40px";
document.getElementById("para").style.color = "red";

//  Butten Click eavent

document.getElementById("btn").addEventListener("click" ,function(){
    // jab bhi click kre ya ho tb ye kaam krooo!

});


    