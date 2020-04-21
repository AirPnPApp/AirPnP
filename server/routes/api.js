const express = require('express');
const npsController = require('../controllers/npsController.js');
const router = express.Router();

// connects with SQL database to serve client/front-end
// res is array of objects with name, parkCode, lat, and long

router.get('/',
  npsController.getParkData,
  (req, res) => {
  res.status(200).json(res.locals.parksData);
})

// onclick on client side request for single park info 
router.get('/park', 
  npsController.getOnePark,
  (req, res) => {
  res.status(200).json(res.locals.onePark)
})


module.exports = router;