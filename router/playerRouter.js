const express = require("express")

const {
    createPlayer,
    getPlayers,
    getPlayerById,
    updatePlayer,
    deletePlayer
} = require("../controller/playerController")

const router = express.Router()

router.post("/create", createPlayer)

router.get("/all", getPlayers)

router.get("/:id", getPlayerById)

router.put("/:id", updatePlayer)

router.delete("/:id", deletePlayer)

module.exports = router