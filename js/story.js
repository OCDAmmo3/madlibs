'use strict';
/*TODO
Build random selector function


Constructor function for var paragraph to have an easier time
building story with swapping parts.

get elements from form

push elements to story

Build CreateParagraph function
*/

var Paragraph = function(person,adjective,place,thing) {
    this.person = '';
    this.adjective = '';
    this.place = '';
    this.thing = '';
    this.randomSelector = function(array){
        var random = Math.floor(Math.random * array.length);
};
}

function giveRandom(array) {
  var random = array(randomSelector(array));
  return random;
};

var selectPerson = document.getElementById('person').value;
var selectAdjective = document.getElementById('adjective').value;
var selectPlace = document.getElementById('place').value;
var selectThing = document.getElementById('thing').value;

var userInput = new Paragraph(selectPerson, selectAdjective, selectPlace, selectThing);

function publishStory() {
  var paragraph = createParagraph();
  var story = document.getElementById('story');
  var p = document.createElementById('p');
  p.textContent = paragraph;
  story.appendChild(p);
}
