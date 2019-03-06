const auth = require("./passportConfig")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

const loginProcedure = async (request, response, next) => {
  const { login, password } = request.body
  passport.use("login", new LocalStrategy({
    login,
    password,
    passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
  }, (req, login, password, done) => {
      config.db.query(loginQuery, [login], (err, result) => {
        if (err) {
          return done('Error with username', err)
        }
        if (result.rows.length > 0) {
          const user = result.rows[0]
          bcrypt.compare(password, user.password, (err, res) => {
            if (res) {
              console.log(null, { id: user.id, username: user.username, email: user.email })
            } else {
              done(null, false)
            }
          })
        } else {
          done(null, false)
        }
      })
    }
  ))
}

module.exports = { loginProcedure }