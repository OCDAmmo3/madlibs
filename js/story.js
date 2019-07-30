/*TODO
Build random selector function


Constructor function for var paragraph to have an easier time
building story with swapping parts.

get elements from form

push elements to story

Build CreateParagraph function
*/
'use strict'
function Paragraph() {
    this.person= '',
    this.adjective= '',
    this.place= '',
    this.thing= '',
    randomSelector= function(array){
    var random = Math.floor(Math.random * array.length);
};
}


function randomSelector(array)
function giveRandom(array){
    var random = array(randomSelector(array));
    return random
};

var selectPerson = document.getElementById('person').value;
var selectAdjective = document.getElementById('adjective').value;
var selectPlace = document.getElementById('place').value;
var selectThing = document.getElementById('thing').value;

