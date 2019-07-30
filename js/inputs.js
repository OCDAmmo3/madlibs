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

//TODO: Push the inputs into the respective arrays

//TODO: Add event listener for the click

//==============================================================================

//handleSubmitInput Function====================================================
//TODO: Prevent default action

//TODO: Call the functions updateArray(), saveToLocalStorage(), clearForm()


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
