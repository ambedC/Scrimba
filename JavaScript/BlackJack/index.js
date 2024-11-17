let player = {
    name : "black", 
    chips : 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " : $ " + player.chips

function getRandomCard() {
    let randomNumber =  Math.floor( Math.random() *12) + 1
 
    if (randomNumber > 10){
        return 10
    }else if ( randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }


   return randomNumber
}

function startGame() {
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    sum = firstCard + secondCard
    cards = [firstCard, secondCard]

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length ; i++) {
        cardsEl.textContent += cards[i] + " , "
    }

    sumEl.textContent = "Sum : " + sum 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
      message = "Woooho! You've got BlackJack!!"
      hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
    
}
    

function newCard() {  
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
    }  
    


// let person = {
//     name : "Ambed",
//     age : 18,
//     country : "India"
// }

// function logData() {
//     data = person.name + " is " + person.age + " years old and lives in " + person.country
//     console.log(data)
// }

// logData()

// ----------------------------------------------------

// let age = 15

// if (age < 6) {
//     console.log("Your ticket is free")

// }else if (age < 18) {
//     console.log("You have a child discount")

// }else if (age < 27){
//     console.log("You have a student discount")

// }else if (age < 66) {
//     console.log("You have to pay the full price")

// }else {
//     console.log("You'll get a senior citizen discount")
// }

// ------------------------------------------------------

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// for(let i=0; i<largeCountries.length; i++) {
//     console.log(" - " + largeCountries[i])
// }

// ------------------------------------------------------------

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")

// console.log(largeCountries)

// ----------------------------------------------------------------

// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("Damn")
// }

// ------------------------------------------------------------------

// let hands = ["rock","paper","scissor"]

// function randomItem() {
//     let i = Math.floor(Math.random() *3) 
//     console.log(hands[i])
// }
// randomItem()




