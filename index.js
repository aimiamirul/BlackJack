//---------------Get document-------------

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let newEl = document.getElementById("new-el")
let startEl = document.getElementById("start-el")
let playerMoney = document.getElementById("player-money")
insEl = document.getElementById("ins-el")

//---------------Nameditems-----------------

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let money = 250
let startBtn = true
let saveMoney = JSON.parse(localStorage.getItem("money"))

//------------------Event----------------
if (localStorage) {
money = saveMoney
playerMoney.textContent = `Money : Rm${money}`
}
startEl.addEventListener("click", renderGame)
newEl.addEventListener("click", newCard)

//---------------- Function-----------------

function startGame() {
    if (money <= 0) {
        alert("You lost you get your Rm 250 back")
        money = 250
        localStorage.setItem("money", JSON.stringify(money))
        location.reload()
    } else if (money > 1000) {
        alert("you are too pro ,reset")
        money = 250
        localStorage.setItem("money", JSON.stringify(money))
        location.reload()
    }
    startBtn = false
    hasBlackJack = false
    message = "new card?"
    sumEl.textContent = "sum : " + sum
    cardEl.textContent = "cards : "
    for (let i=0; i<cards.length; i++) {
        cardEl.textContent += cards[i] + "|"
    }
    if (sum <= 20) {
        console.log("new cards")
        //------When you get a blackjack---
    } else if (sum === 21) {
        startBtn = true
        money += 99
        playerMoney.textContent = "Money: Rm" + money
        hasBlackJack = true
        message = "you have got a BlackJack!"
        // For local database later
        // location.reload()
        //----------When you lose-----------
    } else {
        startBtn = true
        isAlive =true
        message = "you are out of game"
        isAlive = false
        money -= 25
        playerMoney.textContent = "Money: Rm" + money
        // For local database later
        // location.reload()
    }
    messageEl.textContent = message
    localStorage.setItem("money", JSON.stringify(money))
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push (card)
    startGame()
    }
} 

function renderGame() {
    if (startBtn === true){
        isAlive = true
        let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    cardEl.textContent = cards
    startGame()
    }
    
}

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum === 1){
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}

function fixStartGame() {
    if (isAlive === true) {
        startGame()
    }
}
