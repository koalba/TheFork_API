const { Restaurant } = require('../schemas/schemas')

async function getRestaurantes( req , res ){

    let   msj  = 'GET de todos los Restaurantes'
    const data = await Restaurant.find().catch( err => {
        msj = err.message
        return []
    })

    res.status(200).json({ data , msj })
}

async function getRestaurantesById( req , res ){
    
    const { id } = req.params
    console.log(id)

    let   msj  = 'GET Restaurante por ID'
    const data = await Restaurant.findById( id ).catch( err => {
        msj = err.message
        return []
    })

    console.log(msj)

    res.status(200).json({ data , msj })
}

module.exports = {
    getRestaurantes,
    getRestaurantesById
}