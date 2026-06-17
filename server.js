const express = require("express")

const app = express()

const connectDb = require("./config/db")

const playerRouter = require("./router/playerRouter")

app.use(express.json())

connectDb()

app.get("/", (req, res) => {
    res.send("Player Server Running")
})

app.use("/api/players", playerRouter)

app.listen(3000, () => {
    console.log("Server Started On Port 3000")
})