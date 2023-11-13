const express = require("express");
const cors = require("cors");
const users = require("./users.json");
const app = express();
app.use(cors());

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(8000, () => {
  console.log("server started on port 8000");
});
