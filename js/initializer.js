'use strict';

var people = [];
var places = [];
var things = [];
var adjectives = [];

function updateArray() {

  for(var i = 0; i < 3; i++){

    var personInputs = document.getElementById('person-input1', 'person-input2', 'person-input3').value;
    var placeInputs = document.getElementById('place-input1', 'place-input2', 'place-input3').value;
    var thingInputs = document.getElementById('thing-input1', 'thing-input2', 'thing-input3').value;
    var adjectiveInputs = document.getElementById('adjective-input1', 'adjective-input2', 'adjective-input3').value;

    people.push(personInputs);
    places.push(placeInputs);
    things.push(thingInputs);
    adjectives.push(adjectiveInputs);
  }
}
  
function saveToLocalStorage() {
  localStorage.setItem("person", JSON.stringify(people));
  localStorage.setItem("place", JSON.stringify(places));
  localStorage.setItem("thing", JSON.stringify(things));
  localStorage.setItem("adjective", JSON.stringify(adjectives));
}

function handleSubmitInput(event) {
  event.preventDefault();
  updateArray();
  saveToLocalStorage();
  document.location = "../story.html";
}

var createStoryButton = document.getElementById("temporary");
createStoryButton.addEventListener("submit", handleSubmitInput);