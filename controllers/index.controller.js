const bbdd = require('../bbdd')

function getIndex( req , res ){ res.json({ data : bbdd }) }

module.exports = getIndex