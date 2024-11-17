let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    let sum = num1 + num2
    document.getElementById("sum-el").textContent = "Sum : " + sum
    console.log("sum")
}

function subtract() {
    let difference =  num1 - num2
    document.getElementById("sum-el").textContent = "Difference : " + difference
    console.log(difference)
}

function multiply() {
    let product = num1*num2
    document.getElementById("sum-el").textContent = "Product : " + product
    console.log(product)
}

function divide() {
    let quotient = num1/num2
    document.getElementById("sum-el").textContent = "Quotient : " + quotient
    console.log(quotient)
}