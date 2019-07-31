'use strict';
/*TODO
Build random selector function
Constructor function for var paragraph to have an easier time
building story with swapping parts.
get elements from form
push elements to story
Build CreateParagraph function
*/


var Paragraph = function(person,place,adjective,thing) {
    this.person = '';
    this.place = '';
    this.adjective = '';
    this.thing = '';
    this.randomSelector = function (array) {
        var random = Math.floor(Math.random * array.length);
      };
};

//======================================================================================================

function giveRandom(array) {
  var random = array(randomSelector(array));
  return random;
};

//======================================================================================================

//CREATE PARAGRAPH FUNCTION=============================================================================
function createParagraph() {

  var people = JSON.parse(localStorage.getItem('person'));
  var places = JSON.parse(localStorage.getItem('place'));
  var adjectives = JSON.parse(localStorage.getItem('adjective'));
  var things = JSON.parse(localStorage.getItem('thing'));
  var newStory = new Paragraph(people, places, adjectives, things);
} console.log('newStory created line 39');
//IMPORTING HANDLE SUBMIT STORY FUNCTION FROM INPUT JS =================================================
// var importStory = require('./input.js');
// var importedFunction = importStory.handleSubmitStory();  
// console.log('line 43: importedFunction called handle submit story');

//CREATE PUBLISH STORY FUNCTION=========================================================================

function publishStory() {
  var paragraph = createParagraph();
  var story = document.getElementById('storyBlock');
  var p = document.createElement('p');
  p.textContent = paragraph;
  story.appendChild(p);

  story.addEventListener('button', handleSubmitStory);
  console.log('publish story function - line 51');
  console.log(p.textContent);
  console.log(story);

}


//set up resetButton==================================================================================
//TODO add event listener for reset button
function resetButton() {
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetStory);
}


function resetStory(event) {
  event.preventDefault();
  localStorage.clear();

  //TODO add the reset button to clear story and return to index page
  

  //TODO need to clear the arrays and objects

}
//call function to publish story ======================================================================
publishStory();