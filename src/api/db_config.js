const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'booktracker',
  password: 'postgres',
  port: 5432,
})

client.connect()
  .then(() => console.log("Client connected"))
  .catch("Failed to connect to DB")

module.exports = client
