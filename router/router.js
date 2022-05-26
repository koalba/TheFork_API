const express = require('express')
const router  = express.Router()

const getIndex = require('../controllers/index.controller')

router.route( '/'      )
      .get  ( getIndex )  

const { getRestaurantes, getRestaurantesById } = require('../controllers/restaurants.controller')

router.route('/restaurantes'  )
      .get  ( getRestaurantes )

router.route('/restaurantes/:id'  )
      .get  ( getRestaurantesById )

const { getSliders } = require('../controllers/sliders.controller')

router.route( '/sliders/:tipo' )
      .get  ( getSliders )

const { getCities } = require('../controllers/city.controller')

router.route( '/ciudades' )
      .get  ( getCities )

module.exports = router
