/**
 * Title: scraper_functions.js
 * Name: Harris Zheng
 * Date: February 23rd, 2020
 * Description: Responsible for scraping data in node.js. 
 */

let listOfCourses = []; 
let course = []; 
let courseProperties = ['Code', 'Title', "Math", "NS", "CS", "ES", "ED"]; // key indicators of each course 

const tabRegex = /\t+/g; 
const descriptionRegex =/.*[^0-9]/g;
const spaceRegex =/[\s+]/g;

/* Packages */ 
const cheerio = require("cheerio");
const path = require('path');
var fs = require('fs'); // load UofT Website as text file? 

/* $ is used as a tool to process information from an html file */ 
let $ = cheerio.load(fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8'));  

module.exports = {
    processInfoFromHTML : function() {
        for (let i = 0; i < $('[id*="row"]').length; i++){
          let courseObj = {}; 
          let text = $('[id*="row"]').slice(i,i+1).text();
          course = filterText(text);
          console.log($('[id*="row"]').slice(i,i+1).html());
      
          /* Now we have to give key names to the array
          so we store the course in an object with keys  */ 
          for (let j = 0; j < course.length; j++){
            courseObj[courseProperties[j]] = course[j];      
          }  
        
          listOfCourses.push(courseObj);
        }
        
        /* Process second document */
        // for 
        
        return listOfCourses; 
    }
};

function filterText(text){
    text = text.replace(tabRegex, ''); // store text and remove tabs 
  
      /* Distribute the course properties into an array, and filter out any empty elements
    that are accidentally determined as properties.*/   
    let titleAndProperties = text.split('\n');  
    course = titleAndProperties.filter(description => (description != '')); 
    course[0] = course[0].replace(spaceRegex, ''); // remove white space in title 
    return course; 
  
} // filterText
  