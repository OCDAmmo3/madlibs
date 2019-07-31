'use strict';

var Paragraph = function(person, adjective, place, thing) {
    this.person = person;
    this.adjective = adjective;
    this.place = place;
    this.thing = thing;
    this.randomSelector = function() {
      var random = Math.floor(Math.random() * 3);
      return random;
    };
};

var storyArray = ['My friend ', ' decided to go to the ', '. On the way there she discovered a ', ' genie from a ', '. The genie told her he would grant her three wishes. I wish for my ', ' friend ', ' to have a ', '. My second wish is for ', ' to get a ', ' made in ', '. My last wish is to be teleported to the top of the ', '.'];
var storyArray2 = ['My brother ',' went on vacation to ','. During his trip he made a couple of ',' friends with ','. The first ',' friend was ',' who loved to juggle ','. He also met ',', a teacher that missed a connecting flight due to her valuable collection of ',' and loved to talk about ','. Lastly, he met ',' ho was in a mad rush to get back to ','.'];

function createParagraph() {

    var people = JSON.parse(localStorage.getItem('person'));
    var places = JSON.parse(localStorage.getItem('place'));
    var adjectives = JSON.parse(localStorage.getItem('adjective'));
    var things = JSON.parse(localStorage.getItem('thing'));
    
    var newStory = new Paragraph(people, adjectives, places, things);
    
    var randomPerson = newStory.randomSelector(newStory.person);
    var randomPlace = newStory.randomSelector(newStory.place);
    var randomAdjective = newStory.randomSelector(newStory.adjective);
    var randomThing = newStory.randomSelector(newStory.thing);
    
    var story = document.getElementById('storyBlock');
    
    var paragraph = [];
    paragraph.push(storyArray[0]);
    paragraph.push(newStory.person[randomPerson]);
    paragraph.push(storyArray[1]);
    paragraph.push(newStory.place[randomPlace]);
    paragraph.push(storyArray[2]);
    paragraph.push(newStory.adjective[randomAdjective]);
    paragraph.push(storyArray[3]);
    paragraph.push(newStory.thing[randomThing]);
    paragraph.push(storyArray[4]);
    paragraph.push(newStory.adjective[randomAdjective]);
    paragraph.push(storyArray[5]);
    paragraph.push(newStory.person[randomPerson]);
    paragraph.push(storyArray[6]);
    paragraph.push(newStory.adjective[randomAdjective]);
    paragraph.push(storyArray[7]);
    paragraph.push(newStory.thing[randomThing]);
    paragraph.push(storyArray[8]);
    paragraph.push(newStory.person[randomPerson]);
    paragraph.push(storyArray[9]);
    paragraph.push(newStory.thing[randomThing]);
    paragraph.push(storyArray[10]);
    paragraph.push(newStory.place[randomPlace]);
    paragraph.push(newStory.place[randomPlace]);
    paragraph.push(storyArray[11]);
    console.log(paragraph);
  
    return paragraph;
  }

  function createStory() {
    var story = createParagraph();
    var output = '';
    for (var i = 0; i < story.length; i++) {
      output = `${output} ${story[i]}`;
    }
  
    return output;
  
  }

  function publishStory() {
    var paragraph = createStory();
    var story = document.getElementById('storyBlock');
    story.textContent = paragraph;
  }
  
  publishStory();