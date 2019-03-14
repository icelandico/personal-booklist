const passport = require("passport")

loginProcedure = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (user) {
      req.logIn(user, function(err) {
        if (err) return next(err)
        handleSuccess(res, user)
        console.log(req.session)
      })
    } else {
      console.log(info)
      handleError(res, info)
    }
  })(req, res, next)
}

handleError = (response, message) => {
  response.send({ message: "Error"})
}

handleSuccess = (response, userData) => {
  response.send(userData)
}

module.exports = { loginProcedure }