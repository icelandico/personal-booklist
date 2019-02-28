const config = require("./config")
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require("jwt-simple")

const loginProcedure = async (request, response) => {
  console.log(request.body)
  // const user = request.body
  // const alreadyRegistered = await checkIfRegistered(user.email)
  // response.send({ userExists: alreadyRegistered })
  // if (!alreadyRegistered) {
  //   createUser(user)
  // }
}

module.exports = { loginProcedure }