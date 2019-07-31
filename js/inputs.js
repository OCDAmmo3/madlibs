'use strict';

//DATA=========================================================================

//INITALIZE GLOBAL VARIABLES====================================================
var people = [];
var places = [];
var things = [];
var adjectives = [];
//==============================================================================

//==============================================================================

//FUNCTIONALITY=================================================================

//updateArray Function==========================================================
//TODO: Create variables to hold the input data
function updateArray() {
  var personInput = document.getElementById('person-input');
  console.log(`Line 20: The personInput contains: ${personInput}`);
  var placeInput = document.getElementById('place-input');
  console.log(`Line 22: The placeInput contains: ${placeInput}`);
  var objectInput = document.getElementById('object-input');
  console.log(`Line 24: The objectInput contains: ${objectInput}`);
  var adjectiveInput = document.getElementById('adjective-input');
  console.log(`Line 26: The adjectiveInput contains: ${adjectiveInput}`);
  var submitInput = document.getElementById('addInputs');
  console.log(`Line 28: submit button is selected`);
  //TODO: Push the inputs into the respective arrays

  var story = document.getElementById("temporary");
  story.addEventListener("submit", handleSubmitInput);
  //TODO: Add event listener for the click
}

//==============================================================================

//handleSubmitInput Function====================================================
function handleSubmitInput(event) {
  //TODO: Prevent default action
  event.preventDefault();
  console.log('Line 51: Default action prevented');
  console.log(event);
  var person = document.getElementById('person-input').value;
  var place = document.getElementById('place-input').value;
  var adjective = document.getElementById('adjective-input').value;
  var thing = document.getElementById('thing-input').value;

  var newInfo = new Paragraph(person, place, adjective, thing);

  people.push(person);
  places.push(place);
  things.push(thing);
  adjectives.push(adjective);

  this.reset();
  //TODO: Call the functions updateArray(), saveToLocalStorage(), clearForm()
  updateArray();

  console.log('Line 55: updateArray called');
  saveToLocalStorage();
  console.log('Line 57: saveToLocalStorage called');
  // clearForm();
  // console.log('Line 59: clearForm called');
}

//==============================================================================

//saveToLocalStorage Function===================================================
//TODO: Store the input arrays in local storage
function saveToLocalStorage() {
  localStorage.setItem("person", JSON.stringify(people));
  console.log(`Line 68: The local storage now holds within the people array: ${JSON.parse(localStorage.getItem('person'))}`);
  localStorage.setItem("place", JSON.stringify(places));
  console.log(`Line 70: The local storage now holds within the places array: ${JSON.parse(localStorage.getItem('place'))}`);
  localStorage.setItem("thing", JSON.stringify(things));
  console.log(`Line 72: The local storage now holds within the things array: ${JSON.parse(localStorage.getItem('thing'))}`);
  localStorage.setItem("adjective", JSON.stringify(adjectives));
  console.log(`Line 74: The local storage now holds within the adjectives array: ${JSON.parse(localStorage.getItem('adjective'))}`);
}

//TODO: remember to stringify the arrays

//==============================================================================

//clearForm Function============================================================
// function clearForm() {
//   //TODO: Create a variable to hold the querySelectorAll information
//   var clear = document.querySelectorAll('input');
//   console.log('Line 85: The inputs have been selected');
//   //TODO:Create a loop that removes the content
//   for (var i in clear) {
//     clear.textContent = '';
//     console.log(`Line 89: this input has been cleared here's proof : ${clear[i]}`);
//   }
  // =======OR========
  // for (var i in input) {
  //   clear.remove();
  // }
  //
  //TODO: Remember to replace with an empty string
// }

//==============================================================================

//handleSubmitStory Function====================================================
function handleSubmitStory(event) {
  //TODO:Prevent default action
  event.preventDefault();
  console.log('Line 105: Default event prevented');
  //TODO:Call the functions createParagraph() and publishStory()
  createParagraph();
  console.log('line 108: createParagraph called');
  publishStory();
  console.log('line 110: publishStory called');
}

exports.handleSumbitStory = function (event) {
  event.preventDefault();
  console.log('Line 105: Default event prevented');
  //TODO:Call the functions createParagraph() and publishStory()
  createParagraph();
  console.log('line 108: createParagraph called');
  publishStory();
  console.log('line 110: publishStory called');
}

//==============================================================================

//==============================================================================

//EXECUTABLES===================================================================
updateArray();

//==============================================================================

//==============================================================================

//==============================================================================

//==============================================================================

//==============================================================================

//==============================================================================
