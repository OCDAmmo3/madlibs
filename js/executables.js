'use strict';
//DATA==========================================================================

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


//=============================================================================

//PUBLISH STORY FUNCTION=============================================================================

function publishStory() {
  //TODO: Create the variables that holds the paragraph
  //TODO: Connect to the story id
  //TODO: Create the p tag
  //TODO: add the story to the p element
  //TODO: append to the story
  var paragraph = createStory();
  var story = document.getElementById('storyBlock');
  var p = document.createElement('p');

  console.log(`Line 106: p tag created`);

  p.textContent = paragraph;

  console.log(`Line 108: p contains ${p.textContent}`);

  story.appendChild(p);

  console.log('line 54: append paragragh to location on story.html');
  console.log(story);

  var createStoryButton = document.getElementById("createStory");

  console.log('line 57: createStoryButton')

  // createStoryButton.addEventListener("submit", handleSubmitInput); //need to update name of function

  console.log('line 59: event listener for create story button')
  console.log('line 60: publish story function');
  console.log(p.textContent);

}

//=============================================================================


//==============================================================================

//EXECUTABLES===================================================================
publishStory();
//==============================================================================
