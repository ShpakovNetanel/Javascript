const socket = io('http://localhost:3000')
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let circleTurn
const CIRCLE_CLASS = 'circle'
const X_CLASS = 'x'

startGame()

function startGame() {
     circleTurn = false
     cellElements.forEach(cell => {
       cell.classList.remove(X_CLASS)
       cell.classList.remove(CIRCLE_CLASS)
       cell.removeEventListener('click', handleClick)
       cell.addEventListener('click', handleClick, { once: true })
     })
}

function handleClick(e){
     const chosenCell = e.target
     console.log(chosenCell)
     socket.emit('get-cell', chosenCell)
     const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
     placeMark(chosenCell, currentClass)
     socket.on('send-cell', cell => {
          console.log(chosenCell)
          placeMark(cell, currentClass)
     })
     swapTurns()
}

function placeMark(cell, currentClass) {
     cell.classList.add(currentClass)
}

function swapTurns() {
     circleTurn = !circleTurn
}