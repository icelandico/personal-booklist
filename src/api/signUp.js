const config = require("./config")
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require("jwt-simple")

const createUser = (user) => {
  const newUser = {
    username: user.email,
    password: ""
  }
  hashPassword(user.password)
    .then(hashedPass => {
      newUser.password = hashedPass
    })
    .then(() => {
      const insertUserQuery = `
        INSERT INTO "users"
        (username, password)
        VALUES('${newUser.username}', '${newUser.password}')
        `
      config.db.query(insertUserQuery)
    }
  )
}

const hashPassword = async (password) => {
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, saltRounds, (err, hash) => {
      return err ? reject(err) : resolve(hash)
    })
  )
}

const checkIfRegistered = async email => {
  const query = `SELECT id FROM "users" WHERE username=$1`
  const response = await config.db.query(query, [email])
  const exists = response.rowCount > 0
  return exists
}

const registerProcedure = (request, response) => {
  const user = request.body
  checkIfRegistered(user.email)
    .then(res => {
      if (!res) {
        response.send({ userExists: res })
      }
    })
    .then(createUser(user))
  // hashPassword(user.password)
  //   .then(pass => console.log(pass))
}

module.exports = { registerProcedure }