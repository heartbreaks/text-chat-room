const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http, {cors:{origin:"*"}})

const rooms = new Map()
app.use(express.json());

app.get('/rooms/:id', (req, res) => {
   const roomId = req.params.id
   const obj = rooms.has(roomId) ? {
      users: [...rooms.get(roomId).get('users').values()],
      messages: [...rooms.get(roomId).get('messages').values()]
   } : {users: [], messages: []}

   res.status(200).json(obj)
})

app.post('/rooms', function (req, res) {
   const {roomId, name} = req.body
   if (!rooms.has(roomId)) {
      rooms.set(roomId, new Map([
          ['users', new Map()],
          ['messages', []]
      ]))
   }
   res.status(200).json([...rooms.keys()])
})

io.on('connection', (sockets) => {
   /*
   Подключение и уведомление всех пользователей (кроме себя), о том
   что есть новое подключение
    */
   sockets.on('CHATROOM::CONNECT', ({roomId, name, id}) => {
      sockets.join(roomId)
      sockets.UserId = id

      rooms.get(roomId).get('users').set(sockets.UserId, name)

      const users = [...rooms.get(roomId).get('users').values()]

      sockets.to(roomId).emit('CHATROOM::UPDATE_USERS', users)
   })

   sockets.on('CHATROOM::SET_MESSAGE', ({roomId, userName, messageText, timeOfMessage}) => {
      const infoMessage = {userName, messageText, timeOfMessage}

      rooms.get(roomId).get('messages').push(infoMessage)
      sockets.broadcast.to(roomId).emit('CHATROOM::SET_MESSAGE', infoMessage)
   })

   sockets.on('disconnect', () => {
      rooms.forEach((element, roomId) => {
         if (element.get('users').delete(sockets.UserId)) {
            const users = [...rooms.get(roomId).get('users').values()]
            sockets.to(roomId).emit('CHATROOM::UPDATE_USERS', users)
         }
      })
   })

   console.log(`Connected w/ socket ${sockets.id}`)
})

http.listen(8888, (err) => {
   if (err) {
      throw new Error(err)
   }
});