/** 
 * Title: upload.js
 * Author: Harris Zheng
 * Date: February 23rd, 2020
 * Description: All functions that upload the JSON Database. 
*/

/** 
 * Name: Trigger JSON
 * Description: Triggers file input by clicking on a button. 
*/
function triggerJSON(){
    $("#myInput").trigger("click");
}

/**
 * Name: Load JSON
 * Description: Loads a list of courses from a JSON database. 
 * Also erases previous list of courses and loads a new list.  */
function loadJSON(){
    alert("Changed!");
    
    // Don't do anything if no file has been uploaded
    if(document.getElementById("myInput").value != "") {
        var file = document.getElementById("myInput").files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "application/json");
            reader.onload = function (evt) {

                /* Load data so that values, AU units and initial values, can be updated */ 
                let tempReader = evt.target.result;
                displayedCourses = JSON.parse(tempReader);
                console.log(displayedCourses);
                for (let i = 0; i < 5; i++){
                switch(i){
                    case 0: initialAU[i] = +displayedCourses[displayedCourses.length - 1].Math; break;
                    case 1: initialAU[i] = +displayedCourses[displayedCourses.length - 1].NS; break;
                    case 2: initialAU[i] = +displayedCourses[displayedCourses.length - 1].CS; break;
                    case 3: initialAU[i] = +displayedCourses[displayedCourses.length - 1].ES; break;
                    case 4: initialAU[i] = +displayedCourses[displayedCourses.length - 1].ED; break;
                } // switch 
                }

                /* Remove all previous UI  */
                $('.row100.body').not('#footer, #initial').remove(); // the not modifier
                /* Update UI */
                updateUploadUI();

                /* Calculate new values */
                modifyInitialAU();
                sumCourse();
            }
            reader.onerror = function (evt) {
                console.log("error reading file");
            }
        }  
    }
    
} // loadJSON
