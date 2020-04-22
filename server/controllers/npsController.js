const axios = require('axios');
const db = require('../models/parkModels.js');
require('dotenv').config();

const npsController = {};

const npsAPIKey = process.env.NPS_API_KEY;

npsController.getParkData = (req, res, next) => {
  const getPark = `SELECT * FROM park;`

  db.query(getPark)
    .then(parksData => {
      res.locals.parksData = parksData.rows;
      next();
    })
    .catch(err => next('error in getPark middleware'))
}

npsController.getOnePark = (req, res, next) => {

  const url = 'https://developer.nps.gov/api/v1/parks';
  const onePark = req.query.code;

  axios.get(url,
    {
      params: {
        parkCode: onePark,
        api_key: npsAPIKey,
      }
    })
    .then(parkData => {
      // Info is a large object from the National Park Service with all of the available information
      let info = parkData.data.data[0];

      // parkObj is the object to hl oly the selected data that
      // will render on the front end, can be adjusted by adding more 
      // information from "info" above
      const parkObj = {}
      parkObj.fullName = info.fullName;
      parkObj.description = info.description;
      parkObj.weather = info.weatherInfo;
      parkObj.images = info.images[0].url;
      parkObj.city = info.addresses[0].city;
      parkObj.stateCode = info.addresses[0].stateCode;
      parkObj.activities = info.activities
      // console.log('npsController - parkObj:', parkObj);
      res.locals.onePark = parkObj;
      next();
    })
    .catch(err => {
      return next('error in getOnePark middleware')
    })
}

module.exports = npsController;



// * the below function was used to create an array of objects due to National Park Service's slow API response...
  // array of objects syntax: [ { name: 'National Park Name, parkCode: 'parkCode', latitude: 12345, longitude: 12345 }]
// * this was then stored into our SQL database which we send the initial request to instead :-) 
/*
const parkCodes = 'anac,appa,arch,badl,bibe,blca,brca,cany,cave,coga,crla,cuva,drto,ever,foth,fofr,gaar,jeff,glba,glac,glec,grba,grsa,gumo,hosp,indu,jeca,jomu,kefj,lavo,lode,maac,maca,mnrr,mora,npnh,jazz,ozar,pefo,redw,romo,seki,thro,viis,whis,whsa,wotr,wrst,yell,yose'
npsController.getPark = (req, res, next) =>{
  const url = 'https://developer.nps.gov/api/v1/parks';

  axios.get(url,
    {
      params: {
        parkCode: parkCodes,
        api_key: npsAPIKey,
      }
    })
    .then(data => {
      let coordinates = []

      for (let el of data.data.data){
        let parkObj = {}

        parkObj.name = el.fullName;
        parkObj.parkCode = el.parkCode;
        parkObj.latitude = parseFloat(el.latitude);
        parkObj.longitude = parseFloat(el.longitude);

        coordinates.push(parkObj)
      }
      console.log(coordinates)
      res.locals.coordinates = coordinates;
      next();
    })
    .catch(err => {
      return next({
        log: err,
        message: 'Something went wrong with the get request to NPS.gov/api'
      })
    })
} 
*/
// * used to load SQL database with NPS response...

// npsController.loadSQL = (req, res, next) => {
  //   const insertPark = 
  //   `INSERT INTO park(name, code, latitude, longitude)
  //   VALUES($1, $2, $3, $4)`

  //   for (let el of parksArray){
  //     let park = [ el.name, el.parkCode, el.latitude, el.longitude ]

  //     db.query(insertPark, park)
  //     .then(added => {
  //       console.log(added)
  //     })
  //     .catch(err=>console.log(err))
  //   }

  // }

  // const parksArray = 
  // [
  //   {
  //     name: 'Anacostia Park',
  //     parkCode: 'anac',
  //     latitude: 38.89644397,
  //     longitude: -76.96314236
  //   },
  //   {
  //     name: 'Appalachian National Scenic Trail',
  //     parkCode: 'appa',
  //     latitude: 40.41029575,
  //     longitude: -76.4337548
  //   },
  //   {
  //     name: 'Arches National Park',
  //     parkCode: 'arch',
  //     latitude: 38.72261844,
  //     longitude: -109.5863666
  //   },
  //   {
  //     name: 'Badlands National Park',
  //     parkCode: 'badl',
  //     latitude: 43.68584846,
  //     longitude: -102.482942
  //   },
  //   {
  //     name: 'Big Bend National Park',
  //     parkCode: 'bibe',
  //     latitude: 29.29817767,
  //     longitude: -103.2297897
  //   },
  //   {
  //     name: 'Black Canyon Of The Gunnison National Park',
  //     parkCode: 'blca',
  //     latitude: 38.57779869,
  //     longitude: -107.7242756
  //   },
  //   {
  //     name: 'Bryce Canyon National Park',
  //     parkCode: 'brca',
  //     latitude: 37.58399144,
  //     longitude: -112.1826689
  //   },
  //   {
  //     name: 'Canyonlands National Park',
  //     parkCode: 'cany',
  //     latitude: 38.24555783,
  //     longitude: -109.8801624
  //   },
  //   {
  //     name: 'Carlsbad Caverns National Park',
  //     parkCode: 'cave',
  //     latitude: 32.14089463,
  //     longitude: -104.5529688
  //   },
  //   {
  //     name: 'Constitution Gardens',
  //     parkCode: 'coga',
  //     latitude: 38.8909354,
  //     longitude: -77.04409306
  //   },
  //   {
  //     name: 'Crater Lake National Park',
  //     parkCode: 'crla',
  //     latitude: 42.94065854,
  //     longitude: -122.1338414
  //   },
  //   {
  //     name: 'Cuyahoga Valley National Park',
  //     parkCode: 'cuva',
  //     latitude: 41.26093905,
  //     longitude: -81.57116722
  //   },
  //   {
  //     name: 'Dry Tortugas National Park',
  //     parkCode: 'drto',
  //     latitude: 24.628741,
  //     longitude: -82.87319
  //   },
  //   {
  //     name: 'Everglades National Park',
  //     parkCode: 'ever',
  //     latitude: 25.37294225,
  //     longitude: -80.88200301
  //   },
  //   {
  //     name: "Ford's Theatre",
  //     parkCode: 'foth',
  //     latitude: 38.89668819,
  //     longitude: -77.02577944
  //   },
  //   {
  //     name: 'Fort Frederica National Monument',
  //     parkCode: 'fofr',
  //     latitude: 31.2214699,
  //     longitude: -81.39452014
  //   },
  //   {
  //     name: 'Gates Of The Arctic National Park & Preserve',
  //     parkCode: 'gaar',
  //     latitude: 67.75961636,
  //     longitude: -153.2917758
  //   },
  //   {
  //     name: 'Gateway Arch National Park',
  //     parkCode: 'jeff',
  //     latitude: 38.6258069,
  //     longitude: -90.1892508
  //   },
  //   {
  //     name: 'Glacier Bay National Park & Preserve',
  //     parkCode: 'glba',
  //     latitude: 58.80086718,
  //     longitude: -136.8407579
  //   },
  //   {
  //     name: 'Glacier National Park',
  //     parkCode: 'glac',
  //     latitude: 48.68414678,
  //     longitude: -113.8009306
  //   },
  //   {
  //     name: 'Glen Echo Park',
  //     parkCode: 'glec',
  //     latitude: 38.96912315,
  //     longitude: -77.14012206
  //   },
  //   {
  //     name: 'Great Basin National Park',
  //     parkCode: 'grba',
  //     latitude: 38.94617378,
  //     longitude: -114.2579782
  //   },
  //   {
  //     name: 'Great Sand Dunes National Park & Preserve',
  //     parkCode: 'grsa',
  //     latitude: 37.79256812,
  //     longitude: -105.5919572
  //   },
  //   {
  //     name: 'Guadalupe Mountains National Park',
  //     parkCode: 'gumo',
  //     latitude: 31.92304462,
  //     longitude: -104.885527
  //   },
  //   {
  //     name: 'Hot Springs National Park',
  //     parkCode: 'hosp',
  //     latitude: 34.52414366,
  //     longitude: -93.06332936
  //   },
  //   {
  //     name: 'Indiana Dunes National Park',
  //     parkCode: 'indu',
  //     latitude: 41.63765525,
  //     longitude: -87.09647445
  //   },
  //   {
  //     name: 'Jewel Cave National Monument',
  //     parkCode: 'jeca',
  //     latitude: 43.73102945,
  //     longitude: -103.829994
  //   },
  //   {
  //     name: 'John Muir National Historic Site',
  //     parkCode: 'jomu',
  //     latitude: 37.9828422,
  //     longitude: -122.1326097
  //   },
  //   {
  //     name: 'Kenai Fjords National Park',
  //     parkCode: 'kefj',
  //     latitude: 59.81804414,
  //     longitude: -150.106502
  //   },
  //   {
  //     name: 'Lassen Volcanic National Park',
  //     parkCode: 'lavo',
  //     latitude: 40.49354575,
  //     longitude: -121.4075993
  //   },
  //   {
  //     name: 'Lower Delaware National Wild and Scenic River',
  //     parkCode: 'lode',
  //     latitude: NaN,
  //     longitude: NaN
  //   },
  //   {
  //     name: 'Maine Acadian Culture',
  //     parkCode: 'maac',
  //     latitude: 47.2831115723,
  //     longitude: -68.4110870361
  //   },
  //   {
  //     name: 'Mammoth Cave National Park',
  //     parkCode: 'maca',
  //     latitude: 37.19760458,
  //     longitude: -86.13090198
  //   },
  //   {
  //     name: 'Missouri National Recreational River',
  //     parkCode: 'mnrr',
  //     latitude: 42.7882189,
  //     longitude: -97.59077822
  //   },
  //   {
  //     name: 'Mount Rainier National Park',
  //     parkCode: 'mora',
  //     latitude: 46.86075416,
  //     longitude: -121.7043885
  //   },
  //   {
  //     name: 'National Parks of New York Harbor',
  //     parkCode: 'npnh',
  //     latitude: 40.6631915953388,
  //     longitude: -74.0451049804688
  //   },
  //   {
  //     name: 'New Orleans Jazz National Historical Park',
  //     parkCode: 'jazz',
  //     latitude: 29.96303129,
  //     longitude: -90.06749669
  //   },
  //   {
  //     name: 'Ozark National Scenic Riverways',
  //     parkCode: 'ozar',
  //     latitude: 37.13968894,
  //     longitude: -91.25709817
  //   },
  //   {
  //     name: 'Petrified Forest National Park',
  //     parkCode: 'pefo',
  //     latitude: 34.98387664,
  //     longitude: -109.7877678
  //   },
  //   {
  //     name: 'Redwood National and State Parks',
  //     parkCode: 'redw',
  //     latitude: 41.37237268,
  //     longitude: -124.0318129
  //   },
  //   {
  //     name: 'Rocky Mountain National Park',
  //     parkCode: 'romo',
  //     latitude: 40.3556924,
  //     longitude: -105.6972879
  //   },
  //   {
  //     name: 'Sequoia & Kings Canyon National Parks',
  //     parkCode: 'seki',
  //     latitude: 36.71277299,
  //     longitude: -118.587429
  //   },
  //   {
  //     name: 'Theodore Roosevelt National Park',
  //     parkCode: 'thro',
  //     latitude: 47.17777274,
  //     longitude: -103.4300083
  //   },
  //   {
  //     name: 'Virgin Islands National Park',
  //     parkCode: 'viis',
  //     latitude: 18.34279656,
  //     longitude: -64.74194451
  //   },
  //   {
  //     name: 'Whiskeytown National Recreation Area',
  //     parkCode: 'whis',
  //     latitude: 40.61359941,
  //     longitude: -122.6022657
  //   },
  //   {
  //     name: 'White Sands National Park',
  //     parkCode: 'whsa',
  //     latitude: 32.77907858,
  //     longitude: -106.3333461
  //   },
  //   {
  //     name: 'Wolf Trap National Park for the Performing Arts',
  //     parkCode: 'wotr',
  //     latitude: 38.93854526,
  //     longitude: -77.265089
  //   },
  //   {
  //     name: 'Wrangell - St Elias National Park & Preserve',
  //     parkCode: 'wrst',
  //     latitude: 61.4182147,
  //     longitude: -142.6028439
  //   },
  //   {
  //     name: 'Yellowstone National Park',
  //     parkCode: 'yell',
  //     latitude: 44.59824417,
  //     longitude: -110.5471695
  //   },
  //   {
  //     name: 'Yosemite National Park',
  //     parkCode: 'yose',
  //     latitude: 37.84883288,
  //     longitude: -119.5571873
  //   }
  // ]