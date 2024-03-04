const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

let users = [];

//List of all users endpoint
app.get("/users", (req, res) => {
  res.status(200).json(users);
});
//Regiser endpoint
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  //Check if user already exist
  const existUser = users.find((user) => user.username === username);
  if (existUser) {
    return res.status(400).json({ message: "Username already exist" });
  }

  //Create new user object and pusht into the arry
  const newUser = { username, password };
  users.push(newUser);
  res.status(200).json({ message: "User registered successfully" });
});

//login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  //Check if user already exist
  const existUser = users.find((user) => user.username === username);
  if (!existUser) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  //Check if if password is matches
  if (existUser.password !== password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  //Create new user object and pusht into the arry
  res.status(200).json({ message: "Login successfully" });
});

app.post("/logout", (req, res) => {
  const { username } = req.body;
  //find the user
  const index = users.findIndex((user) => user.username === username);
  //if user exist remove from array
  if (index !== -1) {
    users.splice(index, 1);
    res.status(200).json({ message: "Logout successful" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
