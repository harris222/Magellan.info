/**
 * Author: Harris Zheng
 * Description: All download-related functionalities.
 */


/**
 * Name: downloadJSON
 * Description: exports a JSON file to your local file manager 
 */
function downloadJSON(){
    let initialAUobj = {};
    
    let i = 0;
    for (arr of initialAU){
      initialAUobj[initialValueProperties[i]] = arr; 
      i++;
    } // for
  
    displayedCourses.push(JSON.parse(JSON.stringify(initialAUobj)));
    console.log(displayedCourses.length);
    window.open("data:application/html," + encodeURIComponent(JSON.stringify(displayedCourses, null, 4)), "_self");
    displayedCourses.pop(); // make sure that the initial AU values are not added more than once
    // to the output JSON database
  } // downloadJSON