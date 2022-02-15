"use strict";

// let total = 0;
// const totalPrice = document.querySelector(".total");
// const buttonContainer = document.querySelector(".button-container");
// const buttons = document.querySelectorAll(".button");

// buttonContainer.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const buttonValues = [
//         {name: "Lime Cola", price: 2},
//         {name: "Salted Peanuts", price: 3},
//         {name: "Chocolate Bar", price: 4},
//         {name: "Fruit Gummies", price: 6}
//     ];
// })

// >>>>>>>>>> Andrea's Solution <<<<<<<<<<
// const totalP = document.querySelector(".total");
// const colaBtn = document.querySelector(".limeCola");
// const peanutsBtn = document.querySelector(".saltPeanuts");
// const chocBtn = document.querySelector(".chocolate");
// const gummiesBtn = document.querySelector(".gummies");
// let total = 0;

// console.dir(totalP);

// colaBtn.addEventListener("click", ()=> {
//     total += 2;
//     console.log(total);
// });
// peanutsBtn.addEventListener("click", ()=> {
//     total += 3;
//     console.log(total);
// });
// chocBtn.addEventListener("click", ()=> {
//     total += 4;
//     console.log(total);
// });
// gummiesBtn.addEventListener("click", ()=> {
//     total += 6;
//     console.log(total);
// });


// >>>>>>>>>> Modified V1 <<<<<<<<<<
// const totalP = document.querySelector(".total");
// const buttons = document.querySelectorAll(".button");
// const buttonValues = [
//     {name: "Lime Cola", price: 2},
//     {name: "Salted Peanuts", price: 3},
//     {name: "Chocolate Bar", price: 4},
//     {name: "Fruit Gummies", price: 6}
// ];
// let total = 0;

// buttons.forEach((button)=> {
//     button.addEventListener("click",()=> {
//     const price = button.getAttribute("data-price");
//     newTotal(button,price);
//     });
// });

// const newTotal = (button,price) => {
//     total += parseInt(price);
//     totalP.textContent = `Total: $${total.toFixed(2)}`;
//     console.log(total)
// }




// >>>>>>>>>> Modified V3 (For Loop; Using Array) <<<<<<<<<<
const totalP = document.querySelector(".total");
const buttons = document.querySelectorAll(".button");
const itemsArray = [
    {name: "LIME COLA", price: 2},
    {name: "SALTED PEANUTS", price: 3},
    {name: "CHOCOLATE BAR", price: 4},
    {name: "FRUIT GUMMIES", price: 6}
];
let total = 0;

for ( let i = 0 ; i <= itemsArray.length -1 ; i++ ) {
    buttons[i].textContent = (`${itemsArray[i].name} $${itemsArray[i].price}`);
    buttons[i].addEventListener("click", ()=> {
        total += itemsArray[i].price;
        totalP.textContent = `Total: $${total.toFixed(2)}`;
    });
};


// // Question 2
const form = document.querySelector(".two form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const howMany = document.querySelector("#howMany").value;
    const whichCoin = document.querySelector("#whichCoin").value;
    for ( let i=0 ; i < howMany ; i++ ) {
        const newCoin = document.createdElement("div");
        newCoin.classList.add("coin", whichCoin);
        newCoin.textContent = whichCoin;
        bank.append(newCoin);
    }
});

// Question 3
