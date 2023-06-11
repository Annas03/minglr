const express = require('express')
const client = require('./database')

const app = express()

const PORT = 5000

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

app.get('http://localhost:5000/fetchFriends/:id', () => {
    try {
        
    } catch (error) {
        
    }
    // client.query("SELECT user_name FROM friends, users WHERE friends.user_id = 1 AND friends.friend_id = users.user_id;")
})

app.listen(PORT, () => {
    console.log('Server is listening at', PORT)
})