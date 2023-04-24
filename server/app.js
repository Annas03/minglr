const express = require('express')
const client = require('./database')

const app = express()

const PORT = 5000

app.get('http://localhost:5000/fetchFriends/:id', () => {
    client.query("SELECT user_name FROM friends, users WHERE friends.user_id = 1 AND friends.friend_id = users.user_id;")
})

app.listen(PORT, () => {
    console.log('Server is listening at', PORT)
})