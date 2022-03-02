let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let newEl = document.getElementById("new-el")
let startEl = document.getElementById("start-el")
let playerMoney = document.getElementById("player-money")

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let money = 50

function startGame() {
//     newEl.style.visibility = "visible"
//     startEl.style.visibility ="hidden"
    message = "new card?"
    sumEl.textContent = "sum : " + sum
    cardEl.textContent = "cards : "
    for (let i=0; i<cards.length; i++) {
        cardEl.textContent += cards[i] + "|"
    }
    if (sum <= 20) {
    } else if (sum === 21) {
        money += 25
        playerMoney.textContent = "Money: Rm" + money
        message = "you have got a BlackJack!"
        startEl.style.visibility = "visible"
        // newEl.style.visibility = "hidden"
        // For local database later
        // location.reload()
    } else {
        message = "you are out of game"
        isAlive = false
        money -= 25
        playerMoney.textContent = "Money: Rm" + money
        //startEl.style.visibility = "visible"
        // newEl.style.visibility = "hidden"
        // For local database later
        // location.reload()
    }
    messageEl.textContent = message
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
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    cardEl.textContent = cards
    startGame()
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
