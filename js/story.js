/*TODO
Build random selector function
Build CreateParagraph function

Constructor function for var paragraph to have an easier time
building story with swapping parts.

get elements from form

push elements to story


*/
'use strict'
var paragraph = {
    this.person: '',
    this.adj: '',
    this.place: '',
    this.thing: '',
};


function randomSelector(array){
    var random = Math.floor(Math.random * array.length);
};
function giveRandom(array){
    var random = array(randomSelector(array));
    return random
};

var selectPerson = document.getElementById('person').value;
var selectAdj = document.getElementById('adj').value;
var selectPlace = document.getElementById('place').value;
var selectThing = document.getElementById('thing').value;

