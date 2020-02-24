# Magellan.info 🔍 
*An Informative Web Scraper* ☕

> Author: Harris Zheng  
> Date: Feb 23, 2020 

YouTube Video of Presentation: 
https://www.youtube.com/watch?v=os8LjeZu77I

## Abstract: ## 
A JavaScript/Node.js Program that stores information about a user's Upper Year Engineering Courses. 
The main intent of this program is to give the user the ability to assess Upper Year course selection choices.
Right now, the program is able to compute and assess AU Units, which quantifies how many credits that an Engineer needs 
to fulfill CEAB Requirements: https://engineerscanada.ca/accreditation/about-accreditation  

## User Features: ##
- [X] User can upload a JSON database of course information from local repository.
- [X] User can save multiple JSON databases of course information onto local repository, allowing 
      power to assess multiple profiles.   
- [X] User can add courses.
- [X] User can remove courses.
- [X] User can calculate the amount of AU units of his courses instantaneously as courses  
      are being removed -- unlike on the UofT website, where an entire profile has to be submitted for 
      AU units to be seen. 

## Program Features: ##
-  *Cheerio* to scrape data on UofT's Upper Year Courses.
-  *Node.js* backend,  *HTML*, *SASS*, *JavaScript* front end. 
-   Table template is borrowed from https://colorlib.com/wp/css3-table-templates/ 

## Organization: ##
This project is organized into six main layers, from abstract to concrete functionalities.

Layer                                           | 
------------------------------------------------|
Table Calculation Implementation (tableCalculations.js) |
Graphical Interface (GUI.js, index.ejs, and stylesheets compiled from SASS) |
Third Party Graphics from Colorlib (/vendor and /someoneElsesTable) |
Form Processor (formFunc.js) |
JSON Processor (upload.js and download.js) |
Web Scraping and Backend Work (/routes) |

## Future Goals: ## 
 -  Graphically showing if user has fulfilled CEAB Accreditation Requirements.
 -  Gather more information about UofT's Upper Year Courses and display them, such as feedback on courses from Reddit.
 -  Add features to check out other people's Upper Year Course Selections.
 -  Make a Forum to share thoughts on Upper Year Course Selections. 
 -  Complete delete operations using maps id->JSON instead of manipulating the DOM tree.
