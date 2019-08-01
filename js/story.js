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


var stories = [];

var story1 = ['My friend ', ' decided to go to ', '. On the way there she discovered a ', ' genie from a ', '. The genie told her he would grant her three wishes. I wish for my ', ' friend ', ' to have a ',' ', '. My second wish is for ', ' to get a ', ' made in ', '. My last wish is to be teleported to the top of the ', '.'];
var story2 = ['My brother ',' went on vacation to ','. During his trip he made a couple of ',' friends with ','. The first ',' friend was ',' who loved to juggle ',' ','. He also met ',', a teacher that missed a connecting flight due to her valuable collection of ',' from ',' and loved to talk about ','.'];
var story3 = ['My sister\'s friend, ',' loves going ballroom dancing in ','. While dancing, she met a group of ', ' students with strange looking ','. She walked closer to the group and saw they were wearing ',' bracelets from the infamous designer ',' who is known for his love of ', ' ','. She also met ',', a scientist who loves to share his love of ',' from ',' and invited her on a trip to ','.'];

stories.push(story1);
stories.push(story2);
stories.push(story3);

console.log(stories);

function randomStory() {
  var random = Math.floor(Math.random() * stories.length);
  return stories[random];
}

function createParagraph() {
  
  var people = JSON.parse(localStorage.getItem('person'));
  var places = JSON.parse(localStorage.getItem('place'));
  var adjectives = JSON.parse(localStorage.getItem('adjective'));
  var things = JSON.parse(localStorage.getItem('thing'));

  var newStory = new Paragraph(people, adjectives, places, things);

  var storyArray = randomStory();

  var paragraph = [];

  paragraph.push(storyArray[0]);
  paragraph.push(newStory.person[newStory.randomSelector()]);
  paragraph.push(storyArray[1]);
  paragraph.push(newStory.place[newStory.randomSelector()]);
  paragraph.push(storyArray[2]);
  paragraph.push(newStory.adjective[newStory.randomSelector()]);
  paragraph.push(storyArray[3]);
  paragraph.push(newStory.thing[newStory.randomSelector()]);
  paragraph.push(storyArray[4]);
  paragraph.push(newStory.adjective[newStory.randomSelector()]);
  paragraph.push(storyArray[5]);
  paragraph.push(newStory.person[newStory.randomSelector()]);
  paragraph.push(storyArray[6]);
  paragraph.push(newStory.adjective[newStory.randomSelector()]);
  paragraph.push(storyArray[7]);
  paragraph.push(newStory.thing[newStory.randomSelector()]);
  paragraph.push(storyArray[8]);
  paragraph.push(newStory.person[newStory.randomSelector()]);
  paragraph.push(storyArray[9]);
  paragraph.push(newStory.thing[newStory.randomSelector()]);
  paragraph.push(storyArray[10]);
  paragraph.push(newStory.place[newStory.randomSelector()]);
  paragraph.push(storyArray[11]);
  paragraph.push(newStory.place[newStory.randomSelector()]);
  paragraph.push(storyArray[12]);

  console.log(paragraph);

  return paragraph;
}

function createStory() {
  var story = createParagraph();
  var output = '';
  for (var i = 0; i < story.length; i++) {
    output = `${output}${story[i]}`;

  }

  return output;

}

function publishStory() {
  var paragraph = createStory();
  var story = document.getElementById('storyBlock');
  story.textContent = paragraph;
}

publishStory();
