const config = require("./config")
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require("jwt-simple")
const auth = require("./passport")

const loginProcedure = async (request, response) => {
  const { login, password } = request.body
  const res = await (auth.auth(login))
  console.log(res)
  // const user = request.body
  // const alreadyRegistered = await checkIfRegistered(user.email)
  // response.send({ userExists: alreadyRegistered })
  // if (!alreadyRegistered) {
  //   createUser(user)
  // }
}

module.exports = { loginProcedure }