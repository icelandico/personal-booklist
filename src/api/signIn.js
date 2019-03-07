const passport = require("passport")
const config = require("./config")

const loginProcedure = (req, res) => {
  console.log(req.body)
  passport.authenticate("local", function(err, user, info) {
    console.log(user)
  })(req, res)
}
  
module.exports = { loginProcedure }