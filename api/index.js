const express = require("express")
const app = express()
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/user")
const postRoute = require("./routes/post")
dotenv.config();
app.use(express.json()); //de nhan dc file json

mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to Mongodb"))
    .catch((err) => console.log(err))
;

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/post", postRoute)

app.listen(5000, () => {
    console.log("Backend is running")
})
