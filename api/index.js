const express = require("express")
const app = express()
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/user")
dotenv.config();
app.use(express.json()); //de nhan dc file json

mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to Mongodb"))
    .catch((err) => console.log(err))
;

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)

app.listen(5000, () => {
    console.log("Backend is running")
})
