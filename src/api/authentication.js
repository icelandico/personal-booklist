const jwt = require("jwt-simple")
const { createUser } = require("./signUp")
const bcrypt = require("bcrypt")

const tokenForUser = user => {
  const timestamp = new Date().getTime()
  return jwt.encode( { sub: user.id, iat: timestamp }, config.secret)
}

const signIn = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) })
}

const signUp = (req, res, next) => {

  const { username, password } = req.body
  const saltRounds = 10

  if(!username || !password) {
    res.status(422).send({ error: "Provide email or username!" })
  }

  bcrypt.hash(password, saltRounds)
    .then((hash) => {
      return createUser(username, email, hash)
        .then((newUser) => {
          res.json( {token: tokenForUser(newUser) })
        })
        .catch((err) => {
          res.json({ error: "Error with saving user to DB" })
        }
      )
    })
    .catch((err) => {
      return next(err)
    }
  )
}

module.exports = { signUp, signIn }