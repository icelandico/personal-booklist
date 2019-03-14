const LocalStrategy = require("passport-local").Strategy
const config = require("./config")
const bcrypt = require("bcrypt")

const loginQuery = `
  SELECT * 
  FROM "users"
  WHERE username=$1 OR email=$1
  `

const deserializeQuery = `
  SELECT * 
  FROM "users"
  WHERE id=$1
  `

module.exports = passport => {
  passport.use("local", new LocalStrategy({
    usernameField: "login",
    passwordField: "password"
  },
    (login, password, done) => {
    //Match user 
    config.db.query(loginQuery, [login], (err, result) => {
      if (err) {
        return done({ message: "Error with connection to database" }, err)
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
    console.log("SERIALIZING")
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    console.log("DESERIALIZING")
    config.db.query(deserializeQuery, [id], (err, result) => {
      if (result.rows.length > 0) {
        done(err, user)
      } else {
        done(err, false)
      }
    })
  })
}
