//index.js
const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./databaseConnection.js");
const webRoutes = require('./routes/web.js');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/web', webRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.post("/users", (req, res) => {
  connection.query("INSERT INTO users SET ?", req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});