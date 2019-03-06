const LocalStrategy = require("passport-local").Strategy
const passport = require("passport")
const config = require("./config")
const bcrypt = require("bcrypt")

config.app.use(passport.initialize())
config.app.use(passport.session())

const loginQuery = `
  SELECT * 
  FROM "users"
  WHERE username=$1 OR email=$1
  `

const passportLogin = (passport) => 
  passport.use("login", new LocalStrategy((login, password, done) => {
    // Match user 
  config.db.query(loginQuery, [login], (err, result) => {
    if (err) {
      return done('Error with username', err)
    }
    if (result.rows.length > 0) {
      const user = result.rows[0]
      // Match password
      bcrypt.compare(password, user.password, (err, res) => {
        if (err) {
          throw err
        }
        if (res) {
          done(null, { id: user.id, username: user.username, email: user.email })
        } else {
            done(null, false, { message: "Password is incorrect" })
        }
      })
    } else {
        done(null, false, { message: "User is not registered" })
    }
  })
}))


passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

const authMethods = {
  login: passportLogin,
  findUser: loginQuery
}

module.exports = authMethods