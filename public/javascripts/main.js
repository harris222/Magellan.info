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
  
  initialAU = Array(5).fill(0); // fill array of 5 with value 0 
  console.log(initialAU);
  // req.setRequestHeader('Content-Type', 'application/json');
  req.send(null);
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

/** Name: editableInitialAU
 * Description: Onclick modification of initial AU values.
 */
function editableInitialAU(event){
  let row = document.querySelector("#initial"); 
  let td = event.target.closest('td'); // returns nearest ancestor that matches the selector.
  if (!td) return;
  if (!row.contains(td)) return;
  if (td.classList.value === "cell100 column1") return;
  else if (td.classList.value === "cell100 column2") return;
  else if (td.classList.value === "cell100 column8") return;
  console.log(td.classList);
  /* Ensured that td inside row is selected, then we insert/delete textarea*/
  if(td.querySelector("textarea") !== null){  
  } else {
    let textarea = document.createElement("textarea"); 
    let prevVariable = +td.innerHTML; // variable stored before textArea is changed. 
    textarea.innerHTML = td.innerHTML;
    td.innerHTML = ""; 
    textarea.setAttribute("class", "initialCredits"); 
    textarea.addEventListener("blur", blur);
    /* When entry box loses focus, blur activates. */
    function blur(){
      console.log(initialAU);
      if (td.querySelector("textarea") !== null){
        let text = td.querySelector("textarea").value;
        td.querySelector("textarea").remove();
        if (isNaN(+text) || text === undefined){
          td.innerHTML = prevVariable;
          return; 
        } 
        td.innerHTML = text;

        switch(+td.classList.value[td.classList.value.length-1]){
          case 3: initialAU[0] = +text; break;
          case 4: initialAU[1] = +text; break;
          case 5: initialAU[2] = +text; break;
          case 6: initialAU[3] = +text; break;
          case 7: initialAU[4] = +text; break; 
          default: break;
        }
        modifyInitialAU();
        sumCourse();
      }
    }; 

    td.appendChild(textarea); 
    textarea.select(); // ensures that no text area is left hanging when blurred. 

  }
} // editableInitialAU



