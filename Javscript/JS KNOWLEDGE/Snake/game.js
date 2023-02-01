import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime){
    if(gameOver){
        if(confirm('You lost. Press ok to restart.')){
        window.location = 'http://127.0.0.1:5500/NavigationBar/nav.htm#'
        }
        return 
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 
    if(secondsSinceLastRender < 1 / snakeSpeed) return
    lastRenderTime = currentTime

    update()
    draw()
    checkForDeath()
}
window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkForDeath(){
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}

function outSideGrid(position){
    return (
        position.x < 1 || position.x > 21 ||
        position.y < 1 || position.y > 21
    )
}