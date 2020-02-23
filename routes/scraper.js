/**
 * Name: Harris Zheng
 * Date: February 13, 2020 
 * Description: Scrapes information about upper year UofT courses and the amount of 
 * AU credits one gains from taking them.   
 */

/* URLS */ 
const uoft = "https://magellan.ece.toronto.edu/courses_list_au.php";
const hobby = "https://hobbyhelp.com/inspiration/list-of-hobbies/";
const practiceUrl = "https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States"; 

/* Packages */ 
const rp = require('request-promise'); // Didn't end up webscraping because UofT doesn't let me
let express = require('express');
let router = express.Router();

let scraper_functions = require("./scraper_functions.js"); 
listOfCourses = scraper_functions.processInfoFromHTML(); // process information

/* Shows all courses in an engine */ 
router.get('/', (req, res, next) =>{
  res.render('../views/index.ejs'); 
});

router.get('/path/for/ajax/call', (req, res) => {
   // make some calls to database, fetch some data, information, check state, etc...
   let dataToSendToClient = listOfCourses;
   console.log("Text entered:" + req.body.text); 
   // convert whatever we want to send (preferably should be an object) to JSON
   res.send(JSON.stringify(dataToSendToClient));
}); 

module.exports = router; // this can be used by require 



/* Cheerio Practice. */

// rp(hobby).then(function(html){
//     $ = cheerio.load(html); // recommended loading method.
//     const hobbySize = $('p > strong', html).length;
//     for (let i = 1; i < hobbySize; i++){
//         let hobby = $('p > strong').slice(i-1, i).text().split(".")[1].trim(); 
//         string.set(i, hobby.substr(0, hobby.length - 1)); // Filter out colon
//     } // for 
    
// })
// .catch(function(error){
//     console.log(error);
// }).finally(function(){
//   console.log(string);
//   /* GET home page. */
//   router.get('/', (req, res, next) =>{
//     res.render('../views/index.ejs');
//   });     
// });
