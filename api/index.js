const express = require("express")
const app = express()
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const multer = require("multer");

const authRoute = require("./routes/auth")
const usersRoute = require("./routes/user")
const postRoute = require("./routes/post")
const categoryRoute = require("./routes/category")

dotenv.config();
app.use(express.json()); //de nhan dc file json

mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to Mongodb"))
    .catch((err) => console.log(err))
;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, "hello.jpg")
    },
})

const upload = multer({storage: storage});

app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
})
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)

app.listen(5000, () => {
    console.log("Backend is running")
})
