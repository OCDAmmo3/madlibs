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
  var placeInput = document.getElementById('place-input');
  var objectInput = document.getElementById('object-input');
  var adjectiveInput = document.getElementById('adjective-input');
  var submitInput = document.getElementById('addInputs');
  //TODO: Push the inputs into the respective arrays

  people.push(personInput);
  place.push(placeInput);
  thing.push(objectInput);
  adjective.push(adjectiveInput);

  //TODO: Add event listener for the click
  submitInput.addEventListener('click', handleSubmitInput);
}

//==============================================================================

//handleSubmitInput Function====================================================
function handleSubmitInput(event) {
  //TODO: Prevent default action
  event.preventDefault();

  //TODO: Call the functions updateArray(), saveToLocalStorage(), clearForm()
  updateArray();
  saveToLocalStorage();
  clearForm();
}

//==============================================================================

//saveToLocalStorage Function===================================================
//TODO: Store the input arrays in local storage
function saveToLocalStorage() {
  localStorage.setItem("person-input", JSON.Stringify(people));
  localStorage.setItem("place-input", JSON.Stringify(places));
  localStorage.setItem("thing-input", JSON.Stringify(things));
  localStorage.setItem("adjective-input", JSON.Stringify(adjectives));
}

//TODO: remember to stringify the arrays

//==============================================================================

//clearForm Function============================================================
function clearForm() {
  //TODO: Create a variable to hold the querySelectorAll information
  var clear = document.QuerySelectorAll('input');
  //TODO:Create a loop that removes the content
  for (var i in input) {
    clear.textContent = '';
  }
  // =======OR========
  // for (var i in input) {
  //   clear.remove();
  // }
  //
  //TODO: Remember to replace with an empty string
}

//==============================================================================

//handleSubmitStory Function====================================================


function handleSubmitStory(event){
  //TODO:Prevent default action
  event.preventDefaul();
  //TODO:Call the functions createParagraph() and publishStory()
  createParagraph();
  publishStory();
  }

//TODO:Prevent default action

//TODO:Call the functions createParagraph() and publishStory()



//==============================================================================

//==============================================================================

//EXECUTABLES===================================================================

//==============================================================================

//==============================================================================

//==============================================================================

//==============================================================================

//==============================================================================

//==============================================================================
