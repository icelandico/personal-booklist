
export {} // --isolatedModules workaround
const express = require("express")
const port = 4000;
const app = express();

app.use(express.static("dist"));

app.get("/", (req: any, res: any) => {
  res.send("hello world");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

