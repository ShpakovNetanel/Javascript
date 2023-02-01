const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition

recognition.onstart = () => {
     console.log('voice.')
}

recognition.onresult = (event) => {
     const current = event.resultIndex
     const transcript = event.results[current][0].transcript
     content.textContent = transcript
     readOutLoud(transcript)
}

btn.addEventListener('click', () => {
     recognition.start()
})

function readOutLoud(message){
     const speech = new SpeechSynthesisUtterance()
     speech.volume = 1
     speech.rate = 1
     speech.pitch = 1
     speech.text = message
     window.speechSynthesis.speak(speech)
}