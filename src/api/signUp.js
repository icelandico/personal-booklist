const config = require("./config")
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require("jwt-simple")

const createUser = (user) => {
  const newUser = {
    username: user.username,
    email: user.email,
    password: "",
    token: ""
  }
  hashPassword(user.password)
    .then(hashedPass => {
      newUser.password = hashedPass
    })
    .then(() => createToken(newUser.email))
    .then(token => 
      newUser.token = token
    )
    .then(() => {
      const insertUserQuery = `
        INSERT INTO "users"
        (username, email, password, token)
        VALUES('${newUser.username}', '${newUser.email}', '${newUser.password}', '${newUser.token}')
        `
      config.db.query(insertUserQuery)
    }
  )
}

const createToken = (email) => {
  const timestamp = new Date().getTime()
  const token = jwt.encode({ sub: email, iat: timestamp }, config.secret)
  return token
}

const hashPassword = async (password) => {
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, saltRounds, (err, hash) => {
      return err ? reject(err) : resolve(hash)
    })
  )
}

const checkIfRegistered = async (username, email) => {
  const query = `
  SELECT id 
  FROM "users"
  WHERE username=$1 OR email=$2
  `
  const response = await config.db.query(query, [username, email])
  const exists = response.rowCount > 0
  return exists
}

const registerProcedure = async (request, response) => {
  const user = request.body
  const alreadyRegistered = await checkIfRegistered(user.username, user.email)
  response.send({ userExists: alreadyRegistered })
  if (!alreadyRegistered) {
    createUser(user)
  }
}

module.exports = { registerProcedure }