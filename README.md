# Magellan.info 🔍 
*An Informative Web Scraper* ☕

> Author: Harris Zheng  
> Date: Feb 23, 2020 

## Abstract: ## 
A JavaScript/Node.js Program that stores information about the user's Upper Year Engineering Courses. 
The main intent of this program is to give the user the ability to assess Upper Year course selection choices.
Right now, the program is able to assess AU Units, which quantifies how many credits that an Engineer needs 
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
> Honestly I wish Vanilla JavaScript had a more organized structure like C++. I would definitely familiarize myself
with sass, node.js, and React in order to counter problems caused by inorganization in the future. 

## Future Goals: ## 
 -  Graphically showing if a user has fulfilled CEAB Accreditation Requirements.
 -  Gather more information about UofT's Upper Year Courses and display them,
 -  such as feedback from Reddit.
 -  Add features to check out other people's Upper Year Course Selections.
 -  Make a Forum to Post Your Own Thoughts on Upper Year Course Selections. 
 -  Complete delete operations using maps id->JSON instead of manipulating the DOM tree.
