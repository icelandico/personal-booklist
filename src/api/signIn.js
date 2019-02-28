const config = require("./config")
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require("jwt-simple")

const createUser = (user) => {
  const newUser = {
    username: user.email,
    password: "",
    token: ""
  }
  hashPassword(user.password)
    .then(hashedPass => {
      newUser.password = hashedPass
    })
    .then(() => createToken(newUser.username))
    .then(token =>
      newUser.token = token
    )
    .then(() => {
      const insertUserQuery = `
        INSERT INTO "users"
        (username, password, token)
        VALUES('${newUser.username}', '${newUser.password}', '${newUser.token}')
        `
      config.db.query(insertUserQuery)
    }
    )
}

const createToken = (username) => {
  const timestamp = new Date().getTime()
  const token = jwt.encode({ sub: username, iat: timestamp }, config.secret)
  return token
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

const loginProcedure = async (request, response) => {
  console.log(request.body)
  // const user = request.body
  // const alreadyRegistered = await checkIfRegistered(user.email)
  // response.send({ userExists: alreadyRegistered })
  // if (!alreadyRegistered) {
  //   createUser(user)
  // }
}

module.exports = { loginProcedure }