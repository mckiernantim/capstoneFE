const db = require('../db/dbConfig');

const getAllConnections = async () => {
    try {
        const allConnections = await db.any('SELECT * FROM connections');
        return allConnections
    } catch (error) {
        console.log(e)
    }
}

module.exports = {
    getAllConnections
}