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
  }
  
  function saveToLocalStorage() {
    localStorage.setItem("person", JSON.stringify(people));
    // console.log(`Line 189: The local storage now holds within the people array: ${JSON.parse(localStorage.getItem('person'))}`);
    localStorage.setItem("place", JSON.stringify(places));
    // console.log(`Line 191: The local storage now holds within the places array: ${JSON.parse(localStorage.getItem('place'))}`);
    localStorage.setItem("thing", JSON.stringify(things));
    // console.log(`Line 193: The local storage now holds within the things array: ${JSON.parse(localStorage.getItem('thing'))}`);
    localStorage.setItem("adjective", JSON.stringify(adjectives));
    // console.log(`Line 195: The local storage now holds within the adjectives array: ${JSON.parse(localStorage.getItem('adjective'))}`);
  }

  function handleSubmitInput(event) {
    event.preventDefault();
    updateArray();
    saveToLocalStorage();
    document.location = "../story.html";
  }

var createStoryButton = document.getElementById("temporary");
createStoryButton.addEventListener("submit", handleSubmitInput);