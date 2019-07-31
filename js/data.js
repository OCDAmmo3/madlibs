'use strict';
//TODO:  Initialize all global components
//INITALIZE GLOBAL VARIABLES====================================================

var storyArray = ['My friend ', ' decided to go to the ', '. On the way there she discovered a ', ' genie from a ', '. The genie told her he would grant her three wishes. I wish for my ', ' friend ', ' to have a ', '. My second wish is for ', ' to get a ', ' made in ', '. My last wish is to be teleported to the top of the ', '.'];


var people = [];
var places = [];
var things = [];
var adjectives = [];

var Paragraph = function(person, adjective, place, thing) {
  this.person = person;
  this.adjective = adjective;
  this.place = place;
  this.thing = thing;
  this.randomSelector = function(obj) {
    var random = Math.floor((Math.random() * 3) + 1);
    return random;
  };
};
//==============================================================================
