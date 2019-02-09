
export {} // --isolatedModules workaround
const express = require("express")
const port = 4000
const app = express()
const { Pool, Client } = require("pg")
const cors = require("cors")
const passport = require("passport-local")
const LocalStrategy = require("passport-local").Strategy
const router = express.router()

app.use(cors())

const dbHost = "postgres://postgres:postgres@localhost/booktracker";

const pool = new Pool({
  connectionString: dbHost
})

app.use(express.static("dist"))

app.get("/", (req: any, res: any) => {
  res.send("hello world")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
