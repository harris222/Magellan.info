/**
 * Title: main.js
 * Author: Harris Zheng
 * Date: Feb 23, 2020 
 * Abstract: A JavaScript/Node.js Program that stores information about the user's Upper Year Engineering Courses. 
 * The main intent of this program is to give the user the ability to assess Upper Year course selection choices.
 * Right now, the program is able to assess AU Units, which quantifies how many credits that an Engineer needs 
 * to fulfill CEAB Requirements: https://engineerscanada.ca/accreditation/about-accreditation  
 * For more details, see abstract.txt. 
 */


let background = null;  
let doc = null; 
let html = null;
let id = 0;
let input = null;
let database = [];
let displayedCourses = []; // Id -> JSON
let modifying = false;
let initialAU = [];
let initialValueProperties = ["Math", "NS", "CS", "ES", "ED"]; // For outwriting to JSON file 

window.onload = loadCourseDB(); 

/** 
 * Name: loadCourseDB
 * Description: Load from Node.js a list of most Upper Year Engineering Courses at UofT  
 */
function loadCourseDB(){
  var req = new XMLHttpRequest();
  var url = '/path/for/ajax/call';
  req.open('GET',url,true); // set this to POST if you would like.
  req.addEventListener('load',onLoad);
  req.addEventListener('error',onError);
  
  /* Check if the modify button has been clicked. */
  document.querySelector('#mod').addEventListener("click", function(){
    modifying = true;
  });
  // req.setRequestHeader('Content-Type', 'application/json');
  req.send(null);
  promptInitialAU(); // Ask for AU units that the user has already obtained
} // loadCourse()

/**
 * Name: onLoad
 * Description: Courses loaded successfully. 
 */
function onLoad() {
  let response = this.responseText;
  database = JSON.parse(response);
  // console.log(database);
}

/** Name: onError
* Description: Courses failed to load. 
*/
function onError() {
  alert('error receiving async AJAX call');
}

/** Name: promptInitialAU
 * Description: Ask User for their previous AU units record on pageload. 
 */
function promptInitialAU(){

  let i = 0;
  let temp = [];
  while (i < 5){
    switch(i){
      case 0: temp[i] = prompt("Math Units:", initialAU[i]); break;
      case 1: temp[i] = prompt("CS Units:", initialAU[i]); break;
      case 2: temp[i] = prompt("ES Units:", initialAU[i]); break;
      case 3: temp[i] = prompt("NS Units:", initialAU[i]); break;
      case 4: temp[i] = prompt("ED Units:", initialAU[i]); break;
    }
    
    console.log(temp[i]);

    if (isNaN(+temp[i])){
      i = 0;
      alert("You Entered an Invalid Value. Try Again.");
      temp = [];
      continue;
    } else if (temp[i] == undefined){
      console.log("Cancel Button Pressed.");
      
      /* When button is not clicked, screen is loading and 
      if user cancels initial value load, no initial values are entered. 
      If modifying button is clicked and cancel is pressed, old values are kept. */
      if (!modifying){
        initialAU[0] = 0;
        initialAU[1] = 0;
        initialAU[2] = 0;
        initialAU[3] = 0;
        initialAU[4] = 0;
        modifyInitialAU();
        sumCourse();
        console.log(initialAU);
        return;
      } else {
        return;
      }
      
    }

    i++;


  } // while

  /* If all validation tests passed, load old values into new v alues. Convert string to number */ 
  initialAU[0] = +temp[0];
  initialAU[1] = +temp[1];
  initialAU[2] = +temp[2];
  initialAU[3] = +temp[3];
  initialAU[4] = +temp[4];

  modifyInitialAU();
  // document.querySelector('#initial > .cell100.column8').innerHTML = "+" + initialAU.reduce((accumulator, element) => (accumulator += element), 0);
  
  sumCourse();
   
} // 


