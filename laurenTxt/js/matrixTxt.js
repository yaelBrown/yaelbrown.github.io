// test script make sure it works
console.log("matrixtxt.js");

// text to print to screen
var str = "Lauren"

// convert text to array
var arr = str.split("");

// pick a random number between 1 and 0
var smallNum = 0;

const numGen = () => {
  return parseInt(Math.round(Math.random()));
}

// pick a letter from array
const pickLetter = (array) => {
  let arrLength = array.length - 1;
  let randomArrNumber = parseInt(Math.round(Math.random() * arrLength));
  return array[randomArrNumber];
}

// format letter
const letter = () => {
  var ltr = pickLetter(arr);
  return "  " + ltr + "  ";
}

// start adding to dom


var letterDiv = () => {
  return "<div>" + letter(arr) + "</div>";
}


var count = 0;
var countMAX = 50;

var node = document.createElement("div");
var textNode = document.createTextNode("  " + letter(arr) + "  ");
node.appendChild(textNode);

var row = document.createElement("div");

const generateLtrs = () => {
  while (count < countMAX) {
    var node = document.createElement("div");
    var textNode = document.createTextNode("  " + letter(arr) + "  ");
    node.appendChild(textNode);
    document.getElementById("scrollingTxt").appendChild(node);
    ++count;
  }
}


setInterval(function() {
  document.getElementById("scrollingTxt").insertAdjacentHTML('beforeend', letterDiv());
}, 20)