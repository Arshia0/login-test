const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vash_2002", // رمز عبور MySQL خود را وارد کنید
  database: "login_app",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      return res.status(500).send("Server error");
    }
    if (result.length > 0) {
      res.send("Login successful");
    } else {
      res.status(401).send("Invalid credentials");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
