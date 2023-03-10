//Movement Animation
const card = document.querySelector('.card')
const container = document.querySelector('.container')

//Moving Animation Event
container.addEventListener('mousemove', (event) => {
     let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
     let yAxis = (window.innerHeight / 2 - event.pageY) / 25;
     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//Animate In 
container.addEventListener('mouseenter', e => {
     card.style.transition = 'none';
})

//Animate Out
container.addEventListener('mouseleave', e => {
     card.style.transition = 'all 0.5s ease';
     card.style.transform = 'rotateY(0deg) rotateX(0deg)'
})