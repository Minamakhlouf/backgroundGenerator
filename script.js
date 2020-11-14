const h3 = document.querySelector("h3"); 
const input1 = document.querySelector("#color1"); 
const input2 = document.querySelector("#color2"); 
const body = document.querySelector("body"); 
const button = document.querySelector("button"); 
const transition = document.querySelector("#transition"); 
const hiddenDiv = document.querySelector("#hiddenDiv"); 

function setGradient() {
    body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`; 
    h3.textContent = `${body.style.background};`
}

input1.addEventListener("input", setGradient); 

input2.addEventListener("input", setGradient); 

button.addEventListener("click", function() {
    let random = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]; 
    body.style.background = `linear-gradient(to right, rgb(${random[0]}, ${random[1]}, ${random[2]}), rgb(${random[3]}, ${random[4]}, ${random[5]}))`
    h3.textContent = `${body.style.background};`
}); 

transition.addEventListener("click", function() {
    hiddenDiv.classList.toggle("off"); 
    console.log(hiddenDiv.getAttribute("class")); 
    if (hiddenDiv.getAttribute("class") === "off") {
        transition.textContent = "Click me to compare multiple backgrounds!!!"
    } else {
        transition.textContent = "Click me to remove comparison box!!!"; 
    }
}); 
