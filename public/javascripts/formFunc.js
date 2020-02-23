/** Author: Harris Zheng
 * Description: All functionalities related to forms, including autocomplete, find courses etc.. */

 
 /** Name: Find Course.
  * Description: Finds the course that the user has submitted
  */
function findCourse(){
    html = null;
    input = document.querySelector("#course").value;
    let alreadyDisplayed = false;
    for (course of displayedCourses){
      if (input == course.Code){
        alreadyDisplayed = true;
      }
    }
  
    if (alreadyDisplayed){
      alert("You have already entered this course");
      closeForm();
      return;
    }
    /* Find the course code */ 
    for (course of database){ 
      console.log(course.Code);
      if (input == course.Code){
        /* {"Code":"ACT230H1F","Title":"Mathematics of Finance for Non-Actuaries","Math":"0","NS":"0","CS":"30","ES":"0","ED":"0"},*/
         console.log("Course Found!");
         html = `<table><tr class="row100 body" id = ` + (id) + `>
         <td class="cell100 column1">` + course.Code + `</td>
         <td class="cell100 column2">` + course.Title + `</td>
         <td class="cell100 column3">` + course.Math + `</td>
         <td class="cell100 column4">` + course.NS + `</td>
         <td class="cell100 column5">` + course.CS + `</td>
         <td class="cell100 column6">` + course.ES + `</td>
         <td class="cell100 column7">` + course.ED + `</td>
         <td class="cell100 column8"><button type="button" class="btn btn-danger" onclick="removeCourse(` + (id++) + `)">Remove</button></td>
         </tr><table>`;
  
         displayedCourses.push(course);
         break;
      } // if 
    }
  
    /* Insert into HTML */ 
    if (html != null){
      doc = new DOMParser().parseFromString(html, "text/html");
      child = doc.querySelector('table > tbody > tr');
      console.log(child);
      console.log(doc.html); 
      parent = document.querySelector('tbody');
      sibling = document.querySelector('#initial'); 
      parent.insertBefore(child, sibling);
    } else {
      alert("Course Not Found. Please enter your course name in capitals.");
    }
    closeForm();
    console.log(displayedCourses);
    sumCourse();
  } // if 
  
  /**
   * Name: removeCourse
   * @param: id -- id of a course
   * Description: still needs work. 
   */
  function removeCourse(id){
    let elementToDelete = document.querySelector('table > tbody > tr[id="' + id + '"]');    
    let courseCode = document.querySelector('table > tbody > tr[id="' + id + '"] > .cell100.column1').innerHTML;
    console.log("String to be deleted: " + courseCode);
    for (let key in displayedCourses){
        console.log(displayedCourses[key].Code);
        if (displayedCourses[key].Code === courseCode){
          displayedCourses.splice(key, 1);
        }
    }

    elementToDelete.remove();
    console.log("Displayetd array: " + displayedCourses);
    sumCourse();
  } // removeCourse 
  
  
  
  
  function updateInput(){
    input = document.querySelector('#course').value;
    console.log("Updated value: " + input);
  }
  
  function filterSearch(){
    updateInput();
    // Get the div you want to add element to
    let rigDiv = $("#suggestions");
    if ($("#suggestions > option").length != 0) 
      $("#suggestions > option").remove(); 
    
    console.log("Input: " + input + "\n");
    // Loop through images and add them to target div
    let i = 0; 
    for(var obj of database){
        console.log(input === obj.Code.substr);
        if (input === obj.Code.substr(0, input.length) && i < 10){
          var element = '<option>' + obj.Code + '</option>';
          console.log("Why is this running?");
          rigDiv.append(element); 
          i++;
        } 
  
        if (i == 10) break;
    }
  }