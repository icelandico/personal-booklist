const passport = require("passport")

loginProcedure = (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (user) {
      handleSuccess(user)
    } else {
      console.log(info)
      //handleError(res, info)
    }

  })(req, res)
}

handleError = (response, message) => {
  response.send({ message: "Error"})
}

handleSuccess = (userData) => {
  response.send(userData)
}
  
module.exports = { loginProcedure }