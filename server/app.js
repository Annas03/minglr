const express = require('express')
// const client = require('./database')
const cors = require('cors')


const app = express()

const PORT = 5000
app.use(cors())

const friends = [
    {
      name: 'John Doe',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      active: true,
    },
    {
      name: 'Jane Smith',
      photo: 'https://randomuser.me/api/portraits/women/1.jpg',
      active: false,
    },
    {
      name: 'Bob Johnson',
      photo: 'https://randomuser.me/api/portraits/men/2.jpg',
      active: true,
    },
  ];

app.get('/fetchFriends/:id', (req, res) => {
    try {
        const user_id = req.params.id
        res.status(200).send(friends)
    } catch (error) {
        res.status(400).send("Error!!")
    }
    // client.query("SELECT user_name FROM friends, users WHERE friends.user_id = 1 AND friends.friend_id = users.user_id;")
})

app.listen(PORT, () => {
    console.log('Server is listening at', PORT)
})