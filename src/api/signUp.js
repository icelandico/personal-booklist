const db = require("./config")
const pgp = require('pg-promise')(initOptions)

const createUser = (username, password) => {
  const query = `
  INSERT INTO "Users"
  (username, password)
  VALUES($1 $2)
  RETURNING *
  `
  return db.one(query, [username, password])
}

module.exports = { createUser }