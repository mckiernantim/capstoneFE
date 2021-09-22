const express = require('express');
const connections = express.Router({
    mergeParams: true
});

// const { checkFirebaseToken } = require("../middleware/auth");
const {getAllConnections} = require('../Queries/Connections')

connections.get('/', async(req, res) => {
    try {
        const connections = await getAllConnections();
        res.json(connections)
    } catch (error) {
        console.log(error)
        res.status(404).send(`Message: ${error}`)
    }
});

module.exports = connections