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
const button1 = document.querySelector("#button1"); 
const transition = document.querySelector("#transition"); 
const hiddenDiv = document.querySelector("#hiddenDiv"); 
const select1 = document.querySelector("#select1"); 
const select2 = document.querySelector("#select2"); 
const box1 = document.querySelector("#box1"); 
const box2 = document.querySelector("#box2"); 
const box3 = document.querySelector("#box3"); 
const comparisonBox1 = document.querySelector("#comparisonBox1"); 
const comparisonBox2 = document.querySelector("#comparisonBox2"); 
const comparisonBox3 = document.querySelector("#comparisonBox3");
const textbox1 = document.querySelector("#textbox1"); 
const textbox2 = document.querySelector("#textbox2"); 
const textbox3 = document.querySelector("#textbox3"); 
const button2 = document.querySelector("#button2"); 
const button3 = document.querySelector("#button3"); 
const button4 = document.querySelector("#button4"); 

function setGradient() {
    body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`; 
    h3.textContent = `${body.style.background};`
}

input1.addEventListener("input", setGradient); 

input2.addEventListener("input", setGradient); 

button1.addEventListener("click", function() {
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

select1.addEventListener("input", function() {
    box1.classList.add("off"); 
    box2.classList.add("off"); 
    box3.classList.add("off"); 
    switch (select1.value) {
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

input3.addEventListener("input", function() {
    comparisonBox1.style.background = `linear-gradient(to right, ${input3.value}, ${input4.value})`; 
    textbox1.textContent = `${comparisonBox1.style.background};`
}); 

input4.addEventListener("input", function() {
    comparisonBox1.style.background = `linear-gradient(to right, ${input3.value}, ${input4.value})`; 
    textbox1.textContent = `${comparisonBox1.style.background};`
}); 

input5.addEventListener("input", function() {
    comparisonBox2.style.background = `linear-gradient(to right, ${input3.value}, ${input4.value})`; 
    textbox2.textContent = `${comparisonBox2.style.background};`
}); 

input6.addEventListener("input", function() {
    comparisonBox2.style.background = `linear-gradient(to right, ${input3.value}, ${input4.value})`; 
    textbox2.textContent = `${comparisonBox2.style.background};`
}); 

input7.addEventListener("input", function() {
    comparisonBox3.style.background = `linear-gradient(to right, ${input3.value}, ${input4.value})`; 
    textbox3.textContent = `${comparisonBox3.style.background};`
}); 

input8.addEventListener("input", function() {
    comparisonBox3.style.background = `linear-gradient(to right, ${input3.value}, ${input4.value})`; 
    textbox3.textContent = `${comparisonBox3.style.background};`
}); 

button2.addEventListener("click", function() {
    let random = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]; 
    comparisonBox1.style.background = `linear-gradient(to right, rgb(${random[0]}, ${random[1]}, ${random[2]}), rgb(${random[3]}, ${random[4]}, ${random[5]}))`
    textbox1.textContent = `${comparisonBox1.style.background};`
})

button3.addEventListener("click", function() {
    let random = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]; 
    comparisonBox2.style.background = `linear-gradient(to right, rgb(${random[0]}, ${random[1]}, ${random[2]}), rgb(${random[3]}, ${random[4]}, ${random[5]}))`
    textbox2.textContent = `${comparisonBox2.style.background};`
})

button4.addEventListener("click", function() {
    let random = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]; 
    comparisonBox3.style.background = `linear-gradient(to right, rgb(${random[0]}, ${random[1]}, ${random[2]}), rgb(${random[3]}, ${random[4]}, ${random[5]}))`
    textbox3.textContent = `${comparisonBox3.style.background};`
})

