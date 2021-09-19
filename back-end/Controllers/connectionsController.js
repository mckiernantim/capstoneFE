const express = require('express');
const connections = express.Router({
    mergeParams: true
});

const {getAllConnections} = require('../Queries/Connections')

connections.get('/', async(req, res) => {
    try {
        const connections = await getAllConnections();
        res.json(connections)
    } catch (error) {
        console.log(error)
        res.status(404).send(`Message: ${e}`)
    }
});

module.exports = connections