const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const router = require('./router')

const PORT = process.env.PORT || 5000
const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
     console.log('connection')

     socket.on('disconnect', () => {
          console.log('left')
     })

     socket.on('join', ({name, room}, callback) => {
          console.log(name, room)
          
          const error = true
          if(error){
               callback({error : 'error'})
          }
          callback()
     })
})

app.use(router)
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))