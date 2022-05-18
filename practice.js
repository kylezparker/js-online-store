let userName=prompt("enter your name");
let email=prompt("enter your email");
let password=prompt("enter your password");
let age=prompt("enter your age");
let country=prompt("enter your country");
let salary=Number(prompt("enter your salary per month"));

document.write(`<div class="container"> 
<p><span> name:</span> ${userName} </p>
<p><span> email:</span> ${email} </p>
<p><span> salary:</span> ${salary*12}</p>
</div>`);

// password: ${password} <br>age: ${age} <br>country: ${country}<br>