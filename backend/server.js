const express = require("express")
require("colors")
require("dotenv").config({path:"./config/.env"})
const db = require("./config/db")
const cors = require("cors")
const userRoute = require("./Routes/userRoute")
const authRoute = require("./Routes/authRoute")
const todoRoute = require("./Routes/todoRoute")
const { loginOnly } = require("./Middleware/authmiddleware")






db()
const app = express()


app.use(cors())
app.use(express.json())


app.use("/api/user",userRoute)
app.use("/api/auth", authRoute)
app.use("/api/todo",loginOnly, todoRoute)

app.listen(process.env.PORT || 5000, e => console.log(`SERVER RUNNING http://localhost:${process.env.PORT || 5000}`.bgBlue.black))