'use strict';
/*TODO
Build random selector function
Constructor function for var paragraph to have an easier time
building story with swapping parts.
get elements from form
push elements to story
Build CreateParagraph function
*/

var Paragraph = function (person, adjective, place, thing) {
    this.person = '';
    this.adjective = '';
    this.place = '';
    this.thing = '';
    this.randomSelector = function (array) {
        var random = Math.floor(Math.random * array.length);
      };
};

//=============================================================================

function giveRandom(array) {
  var random = array(randomSelector(array));
  return random;
};
//=============================================================================

//CREATE PARAGRAPH FUNCTION=============================================================================
function createParagraph() {

  var people = JSON.Parse(localStorage.getItem('person'));
  var places = JSON.Parse(localStorage.getItem('place'));
  var adjectives = JSON.Parse(localStorage.getItem('adjective'));
  var things = JSON.Parse(localStorage.getItem('thing'));
  var newStory = new Paragraph(people, places, adjectives, things);
  var story = document.getElementById('createStory');

  story.addEventListener('click', HandleSubmitStory);
}

//=============================================================================


function publishStory() {
  var paragraph = createParagraph();
  var story = document.getElementById('story');
  var p = document.createElementById('p');
  p.textContent = paragraph;
  story.appendChild(p);
<<<<<<< HEAD
}
=======
}
>>>>>>> 040cd01cc694e15eebf8ba3fa1789fcaff4569e2
