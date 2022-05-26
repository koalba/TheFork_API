const { City } = require('../schemas/schemas')

async function getCities( req , res ){

    let msj = 'GET todas las ciudades'
    const data = await City.find().catch( err => { msj = error.message; return [] } )

    res.status(200).json({ data , msj })
}

module.exports = {
    getCities
}