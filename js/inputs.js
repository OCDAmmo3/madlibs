'use strict';

//DATA=========================================================================

//INITALIZE GLOBAL VARIABLES====================================================
var people = [];
var place = [];
var thing = [];
var adjective = [];
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
//TODO: Prevent default action


//TODO: Call the functions updateArray(), saveToLocalStorage(), clearForm()


//==============================================================================

//saveToLocalStorage Function===================================================
//TODO: Store the input arrays in local storage

//TODO: remember to stringify the arrays

//==============================================================================

//clearForm Function============================================================
//TODO: Create a variable to hold the querySelectorAll information

//TODO:Create a loop that removes the content

//TODO: Remember to replace with an empty string

//==============================================================================

//handleSubmitStory Function====================================================
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
