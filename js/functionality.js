'use strict';


//CREATE PARAGRAPH FUNCTION=============================================================================
function createParagraph() {
  //TODO: Create necessary variables to contain the local storage arrays
  var people = JSON.parse(localStorage.getItem('person'));
  // console.log(`Line 7: people contains ${people}`);
  var places = JSON.parse(localStorage.getItem('place'));
  // console.log(`Line 9: places contains ${places}`);
  var adjectives = JSON.parse(localStorage.getItem('adjective'));
  // console.log(`Line 11: adjectives contains ${adjectives}`);
  var things = JSON.parse(localStorage.getItem('thing'));

  // console.log(`Line 14: things contains ${things}`);
  var newStory = new Paragraph(people, adjectives, places, things);
  // console.log(`Line 16: newStory contains person:${newStory.person}`);
  // console.log(`Line 17: newStory contains place:${newStory.place}`);
  // console.log(`Line 18: newStory contains adjective:${newStory.adjective}`);
  // console.log(`Line 19: newStory contains thing:${newStory.thing}`);

  var randomPerson = newStory.randomSelector(newStory.person);
  var randomPlace = newStory.randomSelector(newStory.place);
  var randomAdjective = newStory.randomSelector(newStory.adjective);
  var randomThing = newStory.randomSelector(newStory.thing);
  // console.log('Line 25: Random selectors created');

  // console.log(`Running random selector now it chose : ${temp}`);
  var story = document.getElementById('storyBlock');
  // console.log(`Line 29: story targeting id`);
  //TODO:Concatenate the randomly selected elements into the story array
  var paragraph = [];
  paragraph.push(storyArray[0]);
  // console.log(`Line 33: First preset added - ${paragraph}`);
  paragraph.push(newStory.person[randomPerson]);
  // console.log(`Line 35: First person added to the array. story thus far - ${paragraph}`);

  paragraph.push(storyArray[1]);
  // console.log(`Line 38: Second preset added - ${paragraph}`);
  paragraph.push(newStory.place[randomPlace]);
  // console.log(`Line 40: First place added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[2]);
  // console.log(`Line 43: Third preset added - ${paragraph}`);
  paragraph.push(newStory.adjective[randomAdjective]);
  // console.log(`Line 45: First adjective added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[3]);
  // console.log(`Line 48: Fourth preset added - ${paragraph}`);
  paragraph.push(newStory.thing[randomThing]);
  // console.log(`Line 50: First thing added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[4]);
  // console.log(`Line 53: Fifth preset added - ${paragraph}`);
  paragraph.push(newStory.adjective[randomAdjective]);
  // console.log(`Line 55: Second adjective added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[5]);
  // console.log(`Line 58: Sixth preset added - ${paragraph}`);
  paragraph.push(newStory.person[randomPerson]);
  // console.log(`Line 60: Second person added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[6]);
  // console.log(`Line 63: Seventh preset added - ${paragraph}`);
  paragraph.push(newStory.adjective[randomAdjective]);
  // console.log(`Line 65: Third adjective added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[7]);
  // console.log(`Line 68: Eighth preset added - ${paragraph}`);
  paragraph.push(newStory.thing[randomThing]);
  // console.log(`Line 70: Second thing added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[8]);
  // console.log(`Line 73: Ninth preset added - ${paragraph}`);
  paragraph.push(newStory.person[randomPerson]);
  // console.log(`Line 75: Third person added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[9]);
  // console.log(`Line 78: Tenth preset added - ${paragraph}`);
  paragraph.push(newStory.thing[randomThing]);
  // console.log(`Line 80: Third thing added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[10]);
  // console.log(`Line 83: 11th preset added - ${paragraph}`);
  paragraph.push(newStory.place[randomPlace]);
  // console.log(`Line 85: Second place added to the array. story thus far${paragraph}`);


  paragraph.push(newStory.place[randomPlace]);
  // console.log(`Line 89: Third place added to the array. story thus far${paragraph}`);
  paragraph.push(storyArray[11]);
  // console.log(`Line 91: 12th preset added - ${paragraph}`);

  // console.log(`Line 93: paragraph length is: ${paragraph.length}`);




  //TODO: return newly created story


  // TODO: Attach event listener to the submit button on the form and call the handling function
  // story.addEventListener('submit', handleSubmit);
  console.log(`Line 86: listening for submit`);

  return paragraph;
}
//Testing for randomSelector method
// createParagraph();
console.log(`Line 89: Testing paragraph function`);

//==============================================================================


//CREATE STORY FUNCTION=============================================================================
function createStory() {
  var story = createParagraph();
  // console.log(`Line 117: paragraph created`);
  var output = '';
  for (var i = 0; i < story.length; i++) {
    output = `${output} ${story[i]}`;
    // console.log(`Line 121: Current story is - ${output}`);
  }

  return output;

}

//==============================================================================

//updateArray Function==========================================================
//TODO: Create variables to hold the input data


//==============================================================================

//handleSubmitInput Function====================================================


//==============================================================================

//saveToLocalStorage Function===================================================
//TODO: Store the input arrays in local storage


//==============================================================================

//PUBLISH STORY FUNCTION=============================================================================

function publishStory() {
  //TODO: Create the variables that holds the paragraph
  //TODO: Connect to the story id
  //TODO: Create the p tag
  //TODO: add the story to the p element
  //TODO: append to the story
  var paragraph = createStory();
  var story = document.getElementById('storyBlock');

  // console.log(story);
  // console.log(`Line 212: p tag created`);

  story.textContent = paragraph;

  // console.log(`Line 216: p contains ${story.textContent}`);
  // console.log('line 220: append paragragh to location on story.html');

 
  // console.log('line 225: createStoryButton')

   //need to update name of function

  // console.log('line 229: event listener for create story button');
  // console.log('line 230: publish story function');
  // console.log(story.textContent);
}
