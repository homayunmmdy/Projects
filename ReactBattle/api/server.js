const express = require("express");
const connectDb = require("./config/dbConnection");
const battleRoute = require("./routes/battle");
const cors = require("cors");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ message: 'Your welcome' });
});

app.use("/api/battles", battleRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
