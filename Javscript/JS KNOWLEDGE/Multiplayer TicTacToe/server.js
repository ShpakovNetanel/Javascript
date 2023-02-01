const io = require("socket.io")(3000, {
     cors:{
          origin: "*",
     },
})

io.on('connection', socket => {
     socket.on('get-cell', cell => {
          socket.broadcast.emit('send-cell', cell)
     })
})