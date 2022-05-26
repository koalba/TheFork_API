const { Slider , Restaurant , Offer , City } = require('../schemas/schemas')

async function getSliders( req , res ) {
    console.clear()
    let { tipo } = req.params

    /* let msj  = 'GET Sliders of type : ' + tipo
    let data = await Slider.find({ 'type' : tipo })
    .catch( err => { msj  = err.message; return []}) */

        let data = []
        
        
        let  msj  = 'GET Sliders of type : ' + tipo
        
        let sliders = await Slider.find({ 'type' : tipo }).lean()
        .then( data => data ).catch( err => { msj = 'Fallo en los sliders'; return [] })
        
        let offers = await Offer.find().lean().then( ofertas =>  ofertas )
        .catch( err => { msj = 'Fallo en las ofertas'; return [] })

        let restaurantes = await Restaurant.find().lean()
        let cities = await City.find().lean()
        
        sliders.map( slider => {
            if( tipo === 'restaurante' ){
                slider.data = restaurantes.filter( restaurante => 
                    ( restaurante[slider.items] && restaurante.direction.city === slider.city ) 
                    || restaurante.offers[slider.items] 
                    || restaurante.specs[slider.items]
                )
            } else if ( tipo === 'seleccion' ){
                slider.data = offers
            } else if ( tipo === 'ciudad' ){
                slider.data = cities.filter( city => city.country === slider.items )
            }
        })
        
    res.status(200).json({ data : sliders , msj })
}

module.exports = { 
    getSliders
}