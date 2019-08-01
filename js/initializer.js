'use strict';

var people = [];
var places = [];
var things = [];
var adjectives = [];

function updateArray() {
  var personInput1 = document.getElementById('person-input1').value;
  var personInput2 = document.getElementById('person-input2').value;
  var personInput3 = document.getElementById('person-input3').value;
  
  var placeInput1 = document.getElementById('place-input1').value;
  var placeInput2 = document.getElementById('place-input2').value;
  var placeInput3 = document.getElementById('place-input3').value;
  
  var thingInput1 = document.getElementById('thing-input1').value;
  var thingInput2 = document.getElementById('thing-input2').value;
  var thingInput3 = document.getElementById('thing-input3').value;
  
  var adjectiveInput1 = document.getElementById('adjective-input1').value;
  var adjectiveInput2 = document.getElementById('adjective-input2').value;
  var adjectiveInput3 = document.getElementById('adjective-input3').value;
  
  people.push(personInput1);
  people.push(personInput2);
  people.push(personInput3);
  
  places.push(placeInput1);
  places.push(placeInput2);
  places.push(placeInput3);
  
  things.push(thingInput1);
  things.push(thingInput2);
  things.push(thingInput3);
  
  adjectives.push(adjectiveInput1);
  adjectives.push(adjectiveInput2);
  adjectives.push(adjectiveInput3);
  
  console.log(people);
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
  document.location = "story.html";
}

var createStoryButton = document.getElementById("temporary");
createStoryButton.addEventListener("submit", handleSubmitInput);
