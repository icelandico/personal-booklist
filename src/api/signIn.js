const passport = require("passport")
const config = require("./config");

config.app.use(passport.initialize());
config.app.use(passport.session());

loginProcedure = (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (user) {
      handleSuccess(res, user)
    } else {
      console.log(info)
      handleError(res, info)
    }

  })(req, res)
}

handleError = (response, message) => {
  response.send({ message: "Error"})
}

handleSuccess = (response, userData) => {
  response.send(userData)
}

module.exports = { loginProcedure }