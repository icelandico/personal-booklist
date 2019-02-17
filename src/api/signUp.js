const db = require("./config")
const bcrypt = require("bcrypt")
const saltRounds = 10
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

const createUser = (request, response) => {
  const user = request.body
  hashPassword(user.password)
    .then(pass => console.log(pass))
}

module.exports = { createUser }