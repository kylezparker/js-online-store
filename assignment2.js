// Write a program where the user enters information on the prompt (product’s name, price and qty) and save the info in variables, then you have to display on the console the info, subtotal and the final price adding taxes. You should have:  

//price Calculation
//tax Calculation
//display Information

let product= prompt("enter the product name");
let price= prompt("enter the price of the product before tax");
let qty= prompt("enter the quantity of the product you have purchased (# of items)");

const tax= .08;
let totalTax= tax*(price*qty);
let total= totalTax + (price*qty);


document.write(`<div><h2>Receipt</h2><p>${product} x ${qty}</p><p>subtotal: ${price*qty}</p><p>tax: ${tax*(price*qty)}</p><p>total: ${total}</p></div>`)