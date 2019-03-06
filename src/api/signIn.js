const passport = require("passport")
const config = require("./config")

const loginProcedure = (request, response) => {
passport.authenticate("local", (reqst, response) => {
  console.log(request)
})
}
  
module.exports = { loginProcedure }