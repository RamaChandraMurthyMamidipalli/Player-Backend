const express = require("express")

const {
    createPlayer,
    getPlayers,
    getPlayerById,
    updatePlayer,
    deletePlayer
} = require("../controller/playerController")

const auth = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/create",createPlayer)

// Protected Route
router.get("/all",auth,getPlayers)

router.get("/:id",auth,getPlayerById)

router.put("/:id",auth,updatePlayer)

router.delete("/:id",deletePlayer)

module.exports = router