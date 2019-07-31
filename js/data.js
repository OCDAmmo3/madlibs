//TODO:  Create the story arrays

var storyArray = ['My friend ', ' decided to go to the ','. On the way there she discovered a ', ' genie from a ', '. The genie told her he would grant her three wishes. I wish for my ', ' friend ', ' to have a ', '. My second wish is for ', ' to get a ', ' made in ', '. My last wish is to be teleported to the top of the ', '.']


//CREATE PARAGRAPH FUNCTION=============================================================================
function createParagraph() {
  //TODO: Create necessary variables to contain the local storage arrays
  var people = JSON.parse(localStorage.getItem('person'));
  console.log(`Line 10: people contains ${people}`);
  var places = JSON.parse(localStorage.getItem('place'));
  console.log(`Line 12: places contains ${places}`);
  var adjectives = JSON.parse(localStorage.getItem('adjective'));
  console.log(`Line 14: adjectives contains ${adjectives}`);
  var things = JSON.parse(localStorage.getItem('thing'));

  console.log(`Line 17: things contains ${things}`);
  var newStory = new Paragraph(people, adjectives, places, things);
  console.log(`Line 19: newStory contains person:${newStory.person}`);
  console.log(`Line 20: newStory contains place:${newStory.place}`);
  console.log(`Line 21: newStory contains adjective:${newStory.adjective}`);
  console.log(`Line 22: newStory contains thing:${newStory.thing}`);

  var randomPerson = newStory.randomSelector(newStory.person);
  var randomPlace = newStory.randomSelector(newStory.place);
  var randomAdjective = newStory.randomSelector(newStory.adjective);
  var randomThing = newStory.randomSelector(newStory.thing);
  console.log('Line 28: Random selectors created');

  // console.log(`Running random selector now it chose : ${temp}`);
  var story = document.getElementById('storyBlock');
  console.log(`Line 32: story targeting id`);
  //TODO:Concatenate the randomly selected elements into the story array
  var paragraph = [];
  paragraph.push(storyArray[0]);
  console.log(`Line 36: First preset added - ${paragraph}`);
  paragraph.push(newStory.person[randomPerson]);
  console.log(`Line 38: First person added to the array. story thus far - ${paragraph}`);

  paragraph.push(storyArray[1]);
  console.log(`Line 41: Second preset added - ${paragraph}`);
  paragraph.push(newStory.place[randomPlace]);
  console.log(`Line 43: First place added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[2]);
  console.log(`Line 46: Third preset added - ${paragraph}`);
  paragraph.push(newStory.adjective[randomAdjective]);
  console.log(`Line 48: First adjective added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[3]);
  console.log(`Line 51: Fourth preset added - ${paragraph}`);
  paragraph.push(newStory.thing[randomThing]);
  console.log(`Line 53: First thing added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[4]);
  console.log(`Line 56: Fifth preset added - ${paragraph}`);
  paragraph.push(newStory.adjective[randomAdjective]);
  console.log(`Line 58: Second adjective added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[5]);
  console.log(`Line 61: Sixth preset added - ${paragraph}`);
  paragraph.push(newStory.person[randomPerson]);
  console.log(`Line 63: Second person added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[6]);
  console.log(`Line 66: Seventh preset added - ${paragraph}`);
  paragraph.push(newStory.adjective[randomAdjective]);
  console.log(`Line 68: Third adjective added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[7]);
  console.log(`Line 71: Eighth preset added - ${paragraph}`);
  paragraph.push(newStory.thing[randomThing]);
  console.log(`Line 73: Second thing added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[8]);
  console.log(`Line 76: Ninth preset added - ${paragraph}`);
  paragraph.push(newStory.person[randomPerson]);
  console.log(`Line 78: Third person added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[9]);
  console.log(`Line 81: Tenth preset added - ${paragraph}`);
  paragraph.push(newStory.thing[randomThing]);
  console.log(`Line 83: Third thing added to the array. story thus far${paragraph}`);

  paragraph.push(storyArray[10]);
  console.log(`Line 86: 11th preset added - ${paragraph}`);
  paragraph.push(newStory.place[randomPlace]);
  console.log(`Line 88: Second place added to the array. story thus far${paragraph}`);


  paragraph.push(newStory.place[randomPlace]);
  console.log(`Line 92: Third place added to the array. story thus far${paragraph}`);
  paragraph.push(storyArray[11]);
  console.log(`Line 94: 12th preset added - ${paragraph}`);

  console.log(`Line 96: paragraph length is: ${paragraph.length}`);




  //TODO: return newly created story


  // TODO: Attach event listener to the submit button on the form and call the handling function
  // story.addEventListener('submit', handleSubmit);
  // console.log(`Line 86: listening for submit`);

  return paragraph;
}
//Testing for randomSelector method
// createParagraph();
// console.log(`Line 89: Testing paragraph function`);

//CREATE STORY FUNCTION=============================================================================
function createStory() {
  var story = createParagraph();
  console.log(`Line 117: paragraph created`);
  var output = '';
  for (var i = 0; i < story.length; i++) {
    output = `${output} ${story[i]}`;
    console.log(`Line 121: Current story is - ${output}`);
  }

  return output;

}
//=============================================================================
