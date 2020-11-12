const h3 = document.querySelector("h3"); 
const input1 = document.querySelector("#color1"); 
const input2 = document.querySelector("#color2"); 
const body = document.querySelector("body"); 
const button = document.querySelector("button"); 

function setGradient() {
    body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`; 
    h3.textContent = `${body.style.background};`
}

input1.addEventListener("input", setGradient); 

input2.addEventListener("input", setGradient); 

button.addEventListener("click", function() {
    let random = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]; 
    console.log(random)
    body.style.background = `linear-gradient(to right, rgb(${random[0]}, ${random[1]}, ${random[2]}), rgb(${random[3]}, ${random[4]}, ${random[5]}))`
    h3.textContent = `${body.style.background};`
}); 
