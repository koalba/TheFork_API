const mongoose = require('mongoose')

let citySchema = new mongoose.Schema(
    { nombre : String , country : String , scr : String , button : { href : String }},
    { collection: 'ciudades' , versionKey: false }
) 

const City = mongoose.model( 'City' , citySchema )

let offerSchema = new mongoose.Schema(
    { nombre : String , scr : String , descripcion : String , button : { href : String , title : String }},
    { collection: 'ofertas' , versionKey: false }
)

const Offer = mongoose.model( 'Offer' , offerSchema )

let restaurantSchema = new mongoose.Schema(
    { 
        nombre : String, 
        scr : String, 
        slider : [String],
        tags : [String],
        nota : Number,
        popular : Boolean,
        festival : Boolean,
        specs : { insider : Boolean , dyums : Boolean , pay : Boolean },
        offers : { offer : Number , yums : Boolean },
        medPrice : Number,
        direction : { street : String , cp : String , city : String , country : String },
        button : { href : String }
    },
    { collection: 'restaurantes' , versionKey: false }
)

const Restaurant = mongoose.model( 'Restaurant' , restaurantSchema )

let sliderShema = new mongoose.Schema(
    { titulo : String , type : String , visibles : Number , more : Boolean , items : String , city : String},
    { collection: 'sliders' , versionKey: false }
)

const Slider = mongoose.model( 'Slider' , sliderShema )

module.exports = { City , Offer , Restaurant , Slider }