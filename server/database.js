const {Client} = require('pg')
const client = new Client({
    host:'localhost',
    user:'postgres',
    port:5432,
    password:'Compaqla2306x',
    database:'chatapp'
})

client.connect()

module.exports = client
// client.query("SELECT * FROM person LIMIT 2", (err, res)=>{
//     console.log(res.rows)
//     client.end;
// })