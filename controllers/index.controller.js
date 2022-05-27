const { Restaurant, City, Slider } = require('../schemas/schemas')

async function getIndex( req , res ){ 

    let r = await Restaurant.find()
    let c = await Restaurant.find()
    let s = await Restaurant.find()

    let data = [r, c, s]

    res.status(200).json({ data }) 
}

module.exports = getIndex