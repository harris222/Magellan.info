/**
 * Title: tableCalculations.js
 * Name: Harris Zheng
 * Date: February 23rd, 2020
 * Description: An interface used for table calculations. 
 */

 /**
  * Name: modifyInitialAU
  * Description: Program prompts for user to provide information about Undergraduate AU Units 
  * that he/she has earned in 1st and 2nd Year. This information has yet to be gathered by the program. 
  */
function modifyInitialAU(){
    document.querySelector('#initial > .cell100.column3').innerHTML = initialAU[0];
    document.querySelector('#initial > .cell100.column4').innerHTML = initialAU[1];
    document.querySelector('#initial > .cell100.column5').innerHTML = initialAU[2];
    document.querySelector('#initial > .cell100.column6').innerHTML = initialAU[3];
    document.querySelector('#initial > .cell100.column7').innerHTML = initialAU[4]; 
}

 /**
  * Name: sumCourses
  * Description: Adds up AU Units of all courses and shows them on a table. 
  */
function sumCourse(){
    let math = 0.0; NS = 0.0; CS = 0.0; ES = 0.0; ED = 0.0;
    for (let obj of displayedCourses){
      math += (parseFloat(obj.Math));
      NS += parseFloat(obj.NS);
      CS += parseFloat(obj.CS);
      ES += parseFloat(obj.ES);
      ED += parseFloat(obj.ED);
    }
    
    console.log(initialAU[2] + CS);
    document.querySelector('#footer > .cell100.column3').innerHTML = (initialAU[0] + math).round2dec();
    document.querySelector('#footer > .cell100.column4').innerHTML = (initialAU[1] + NS).round2dec();
    document.querySelector('#footer > .cell100.column5').innerHTML = (initialAU[2] + CS).round2dec();
    document.querySelector('#footer > .cell100.column6').innerHTML = (initialAU[3] + ES).round2dec();
    document.querySelector('#footer > .cell100.column7').innerHTML = (initialAU[4] + ED).round2dec();

    let sum = initialAU.reduce((accumulator, element) => (accumulator += element), 0) + math + NS + CS + ES + ED;
    document.querySelector('#footer > .cell100.column8').innerHTML = sum.round2dec(); // round 2 decimal places

  } // sumCourse

  Number.prototype.round2dec = function(){
    console.log(typeof(this + []));
    if ((this + []).includes('.') && (this + []).split('.')[1].length > 1){
      return (Math.floor(this * 100) / 100).toFixed(2);
    } else { 
      return this;
    }
  }