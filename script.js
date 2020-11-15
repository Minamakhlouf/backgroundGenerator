const h3 = document.querySelector("h3"); 
const input1 = document.querySelector("#color1"); 
const input2 = document.querySelector("#color2"); 
const input3 = document.querySelector("#color3"); 
const input4 = document.querySelector("#color4"); 
const input5 = document.querySelector("#color5"); 
const input6 = document.querySelector("#color6"); 
const input7 = document.querySelector("#color7"); 
const input8 = document.querySelector("#color8"); 
const body = document.querySelector("body"); 
const button = document.querySelector("button"); 
const transition = document.querySelector("#transition"); 
const hiddenDiv = document.querySelector("#hiddenDiv"); 
const select = document.querySelector("select"); 
const box1 = document.querySelector("#box1"); 
const box2 = document.querySelector("#box2"); 
const box3 = document.querySelector("#box3"); 
const comparisonBox1 = document.querySelector("#comparisonBox1"); 
const comparisonBox2 = document.querySelector("#comparisonBox2"); 
const comparisonBox3 = document.querySelector("#comparisonBox3");

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

select.addEventListener("input", function() {
    box1.classList.add("off"); 
    box2.classList.add("off"); 
    box3.classList.add("off"); 
    switch (select.value) {
        case "1": 
            box1.classList.toggle("off")
            break; 
        case "2": 
            box1.classList.toggle("off")
            box2.classList.toggle("off")
            break; 
        case "3": 
            box1.classList.toggle("off"); 
            box2.classList.toggle("off"); 
            box3.classList.toggle("off");
            break; 
    }
}); 



