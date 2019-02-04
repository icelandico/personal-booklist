
const express = require("express")
const port = 3000;
const app = express();

app.use(express.static("dist"));

app.get("/", (req: any, res: any): void => {
  res.send("hello world");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));

