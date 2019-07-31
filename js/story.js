'use strict';
//DATA==========================================================================
var person = ['Bob', 'Ben', 'Frank']
var adjective = ['Bob', 'Ben', 'Frank']
var place = ['Bob', 'Ben', 'Frank']
var thing = ['Bob', 'Ben', 'Frank']

//INITIALIZE GLOBALS============================================================
var Paragraph = function (person, adjective, place, thing) {
  this.person = person;
  this.adjective = adjective;
  this.place = place;
  this.thing = thing;
  this.randomSelector = function (obj) {
    var random = Math.floor((Math.random() * 3) + 1);
    return random;
  };
};
//==============================================================================

//==============================================================================

//FUNCTIONALITY=================================================================

//CREATE PARAGRAPH FUNCTION=============================================================================
function createParagraph() {
  //TODO: Create necessary variables to contain the local storage arrays
  var people = JSON.parse(localStorage.getItem('person'));
  console.log(`Line 29: people contains ${people}`);
  var places = JSON.parse(localStorage.getItem('place'));
  console.log(`Line 31: places contains ${places}`);
  var adjectives = JSON.parse(localStorage.getItem('adjective'));
  console.log(`Line 33: adjectives contains ${adjectives}`);
  var things = JSON.parse(localStorage.getItem('thing'));
  console.log(`Line 35: things contains ${things}`);
  var newStory = new Paragraph(person, adjective, place, thing);
  console.log(`Line 37: newStory contains person:${newStory.person}`);
  console.log(`Line 38: newStory contains place:${newStory.place}`);
  console.log(`Line 39: newStory contains adjective:${newStory.adjective}`);
  console.log(`Line 40: newStory contains thing:${newStory.thing}`);

  var randomPerson = newStory.randomSelector(newStory.person);
  var randomPlace = newStory.randomSelector(newStory.place);
  var randomAdjective = newStory.randomSelector(newStory.adjective);
  var randomThing = newStory.randomSelector(newStory.thing);
  console.log('Line 46: Random selectors created');

  // console.log(`Running random selector now it chose : ${temp}`);
  var story = document.getElementById('storyBlock');
  console.log(`Line 49: story targeting id`);
  //TODO:Concatenate the randomly selected elements into the story array
  var paragraph = [];
  paragraph.push(newStory.person[randomPerson]);
  console.log(`Line 53: First person added to the array. story thus far - ${paragraph}`);
  paragraph.push(newStory.place[randomPlace]);
  console.log(`Line 55: First place added to the array. story thus far${paragraph}`);
  paragraph.push(newStory.adjective[randomAdjective]);
  console.log(`Line 57: First adjective added to the array. story thus far${paragraph}`);
  paragraph.push(newStory.thing[randomThing]);
  console.log(`Line 59: First thing added to the array. story thus far${paragraph}`);
  paragraph.push(newStory.adjective[randomAdjective]);
  console.log(`Line 61: Second adjective added to the array. story thus far${paragraph}`);
  paragraph.push(newStory.person[randomPerson]);
  console.log(`Line 63: Second person added to the array. story thus far${paragraph}`);
  paragraph.push(newStory.adjective[randomAdjective]);
  console.log(`Line 65: Third adjective added to the array. story thus far${paragraph}`);
  paragraph.push(newStory.thing[randomThing]);
  console.log(`Line 67: Second thing added to the array. story thus far${paragraph}`);
  paragraph.push(newStory.person[randomPerson]);
  console.log(`Line 69: Third person added to the array. story thus far${paragraph}`);
  paragraph.push(newStory.thing[randomThing]);
  console.log(`Line 71: Third thing added to the array. story thus far${paragraph}`);
  paragraph.push(newStory.place[randomPlace]);
  console.log(`Line 73: Second place added to the array. story thus far${paragraph}`);
  paragraph.push(newStory.place[randomPlace]);
  console.log(`Line 75: Third place added to the array. story thus far${paragraph}`);




  //TODO: return newly created story


  // TODO: Attach event listener to the submit button on the form and call the handling function
  story.addEventListener('submit', handleSubmit);
  console.log(`Line 86: listening for submit`);

  return paragraph;
}
//Testing for randomSelector method
// createParagraph();
// console.log(`Line 89: Testing paragraph function`);

//=============================================================================

//PUBLISH STORY FUNCTION=============================================================================

function publishStory() {
  //TODO: Create the variables that holds the paragraph
  //TODO: Connect to the story id
  //TODO: Create the p tag
  //TODO: add the story to the p element
  //TODO: append to the story
  var paragraph = createParagraph();
  console.log(`Line 102: paragraph contains ${paragraph}`);
  var story = document.getElementById('story');
  console.log(`Line 104: story connected to story id`);
  var p = document.createElement('p');
  console.log(`Line 106: p tag created`);
  p.textContent = paragraph;
  console.log(`Line 108: p contains ${p.textContent}`);
  story.appendChild(p);
  console.log(`Line 110: p appended to story`);
}

//=============================================================================


//==============================================================================

//EXECUTABLES===================================================================
publishStory();
//==============================================================================
