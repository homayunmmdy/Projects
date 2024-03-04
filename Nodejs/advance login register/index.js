const express = require('express');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorhandler');
const cors = require("cors")
const dotenv = require('dotenv').config()

connectDb()
const app = express()

const port = process.env.PORT;

app.use(cors());
app.use(express.json())
app.use("/api/contacts" , require('./routes/contactRoutes'))
app.use("/api/users" , require('./routes/userRoutes'))
app.use(errorHandler)

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})