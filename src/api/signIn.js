const db = require("./db_config")

const findUserById = id => {
  const query = `
  SELECT *
  FROM "Users"
  WHERE id=$1
  `
  return db.oneOrNone(query, [id])
}

const verifyUser = username => {
  const query = `
  SELECT *
  FROM "Users"
  WHERE username=$1
  `
  return db.oneOrNone(query, [username])
}

module.exports = { findUserById, verifyUser }