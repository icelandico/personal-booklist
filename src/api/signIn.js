const passport = require("passport")

loginProcedure = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (user) {
      req.logIn(user, (err) => {
        return err ? err : handleSuccess(res, user)
      })
    } else {
      handleError(res, info)
    }
  })(req, res, next)
}

handleError = (response, message) => {
  response.send({ message })
}

handleSuccess = (response, userData) => {
  response.send(userData)
}

module.exports = { loginProcedure }