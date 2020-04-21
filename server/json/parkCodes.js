const fs = require('fs');
const path = require('path');

// pulling all of the NPS data to filter for parkCode only for our initial NPS query
  // nps.json is an object we got from NPS of all of the national park data
  // filter through this to grab the parkCodes to be used to load into SQL database

let parkCodeArray = [];
fs.readFile(path.resolve(__dirname, './npsTest.json'), function (error, content) {
    let data = JSON.parse(content);
    for (let el of data.data){
        parkCodeArray.push(el.parkCode)
    }
    //  to see all of the parkCodes..
    console.log(parkCodeArray) 
});

let parkCodeArrayResult = 
[ 'anac', 
  'appa', 
  'arch', 
  'badl', 
  'bibe', 
  'blca', 
  'brca', 
  'cany', 
  'cave', 
  'coga', 
  'crla', 
  'cuva', 
  'drto', 
  'ever', 
  'foth', 
  'fofr', 
  'gaar', 
  'jeff', 
  'glba', 
  'glac', 
  'glec', 
  'grba', 
  'grsa', 
  'gumo', 
  'hosp', 
  'indu', 
  'jeca', 
  'jomu', 
  'kefj', 
  'lavo', 
  'lode', 
  'maac', 
  'maca', 
  'mnrr', 
  'mora', 
  'npnh', 
  'jazz', 
  'ozar', 
  'pefo', 
  'redw', 
  'romo', 
  'seki', 
  'thro', 
  'viis', 
  'whis', 
  'whsa', 
  'wotr', 
  'wrst', 
  'yell', 
  'yose' ] 