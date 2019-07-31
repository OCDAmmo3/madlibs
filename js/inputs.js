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

}

//==============================================================================

//handleSubmitInput Function====================================================
function handleSubmitInput(event) {  //need to change this name to handleSubmit
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
  
  //TODO: Call the functions updateArray(), saveToLocalStorage(), clearForm()
  updateArray();
  console.log('Line 59: updateArray called');
  saveToLocalStorage();
  console.log('Line 61: saveToLocalStorage called');

  //TODO:Call the functions createParagraph() and publishStory()
  createParagraph();
  console.log('line 65: createParagraph called');
  publishStory();
  console.log('line 67: publishStory called');
  this.reset();
  console.log('line 69: reset the form');

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

//==============================================================================

//EXECUTABLES===================================================================
updateArray();