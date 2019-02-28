const LocalStrategy = require("passport-local").Strategy
const passport = require("passport")
const config = require("./config")

config.app.use(passport.initialize())
config.app.use(passport.session())

const loginQuery = `
  SELECT * 
  FROM "users"
  WHERE username=$1 OR email=$1
  `

const passportAuthenticate = passport.use(new LocalStrategy((login, password, done) => {
  config.db.query(loginQuery, [login], (err, result) => {
    if (err) {
      return done('Error with username', err)
    }
    if (result.rows.length > 0) {
      const first = result.rows[0]
      bcrypt.compare(password, first.password, function (err, res) {
        if (res) {
          cb(null, { id: first.id, username: first.username, type: first.type })
        } else {
          cb(null, false)
        }
      })
    } else {
      cb(null, false)
    }
  })
}))


passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, cb) => {
  db.query('SELECT id, username, type FROM users WHERE id = $1', [parseInt(id, 10)], (err, results) => {
    if (err) {
      winston.error('Error when selecting user on session deserialize', err)
      return cb(err)
    }

    cb(null, results.rows[0])
  })
})

const authMethods = {
  auth: passportAuthenticate
}

module.exports = authMethods