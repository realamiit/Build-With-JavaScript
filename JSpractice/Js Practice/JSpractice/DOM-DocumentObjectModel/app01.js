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
document.getElementById("title");

// 2. Text chane kroo 
document.getElementById("title").innerText = "Naya Text!"

// 3.Style change karo 
document.getElementById("title").style.color = "Blue"