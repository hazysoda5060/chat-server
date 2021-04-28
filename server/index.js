const express = require('express')
const app = express()
const mc = require('./controllers/messages_controller')

app.use(express.json())

app.use(express.static(__dirname + '/../public/build'))

const msgUrl = '/api/messages'
app.get(msgUrl, mc.getMsg)
app.post(msgUrl, mc.createMsg)
app.delete(`${msgUrl}/:id`, mc.deleteMsg)
app.put(`${msgUrl}/:id`, mc.editMsg)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})