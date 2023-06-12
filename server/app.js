import { friends } from './demoData.js'
import express from 'express'
import cors from 'cors'

const app = express()

const PORT = 5000
app.use(cors())

app.get('/fetchFriends/:id', (req, res) => {
    try {
        const user_id = req.params.id
        res.status(200).send(friends)
    } catch (error) {
        res.status(400).send("Error!!")
    }
})

app.listen(PORT, () => {
    console.log('Server is listening at', PORT)
})