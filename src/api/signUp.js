const config = require("./config")
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require("jwt-simple")

// const pgp = require('pg-promise')(initOptions)


// const createUser = (username, password) => {
//   const query = `
//   INSERT INTO "Users"
//   (username, password)
//   VALUES($1 $2)
//   RETURNING *
//   `
//   return db.one(query, [username, password])
// }

const hashPassword = (password) => {
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, saltRounds, (err, hash) => {
      return err ? reject(err) : resolve(hash)
    })
  )
}

const checkIfRegistered = async email => {
  const query = `SELECT id FROM "Users" WHERE username=$1`
  const response = await config.db.query(query, [email])
  const exists = response.rowCount > 0
  return exists
}

const createUser = (request, response) => {
  const user = request.body
  checkIfRegistered(user.email)
    .then(res => response.send({ userExists: res }))
  // hashPassword(user.password)
  //   .then(pass => console.log(pass))
}

module.exports = { createUser }