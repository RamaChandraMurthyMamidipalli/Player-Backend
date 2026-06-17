const Player = require("../models/Player")

// Create Player

exports.createPlayer = async (req, res) => {

    try {

        const player = await Player.create({
            name: req.body.name,
            country: req.body.country,
            role: req.body.role,
            team: req.body.team,
            age: req.body.age
        })

        res.status(201).json({
            message: "Player Created",
            player
        })

    } catch (err) {

        res.status(500).json({
            message: err.message
        })

    }
}


// Get All Players

exports.getPlayers = async (req, res) => {

    try {

        const players = await Player.find()

        res.status(200).json({
            message: "All Players",
            players
        })

    } catch (err) {

        res.status(500).json({
            message: err.message
        })

    }
}


// Get Player By Id

exports.getPlayerById = async (req, res) => {

    try {

        const player = await Player.findById(req.params.id)

        res.status(200).json({
            message: "Player Found",
            player
        })

    } catch (err) {

        res.status(500).json({
            message: err.message
        })

    }
}


// Update Player

exports.updatePlayer = async (req, res) => {

    try {

        const player = await Player.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

        res.status(200).json({
            message: "Player Updated",
            player
        })

    } catch (err) {

        res.status(500).json({
            message: err.message
        })

    }
}


// Delete Player

exports.deletePlayer = async (req, res) => {

    try {

        await Player.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message: "Player Deleted"
        })

    } catch (err) {

        res.status(500).json({
            message: err.message
        })

    }
}