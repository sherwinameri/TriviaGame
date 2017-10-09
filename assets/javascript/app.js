// JS Doc

console.log("Trivia Game Liiiiiife!");
console.log("2 + 3 = " + (2+3));
console.log("This is from app.js");
console.log("LOCAL");

// counters for time and scoring
var counter = 120;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var numQ = 5;

// intervalID
var intervalId;

// sets interval, decrement once a second
function runTimer() {
  intervalId = setInterval(decrement, 1000) ;
}

// decrement
function decrement() {

  // decrease number & show it in div
  counter--;
  $("#show-time").html("<h2>" + "Time Remaining: " + counter + "</h2>");

  if (counter === 0) {
    clearInterval(intervalId);
    $("#whole-page").html("<h2>" + "Time Up!" + "</h2>");
    $("#whole-page").append("Correct Answers: " + correct +"<br>");
    $("#whole-page").append("Incorrect Answers: " + incorrect + "<br>");
    $("#whole-page").append("Unanswered: " + unanswered + "<br>");
  }

}

runTimer();

// The below section is where I am attempting to utilize arrays, for-loops, and on-click functions in order to tell the program what to do when the specifi

var theirInput = new Array();
var answers = new Array(5);
// answers by letter
answers[0] = "A";
answers[1] = "C";
answers[2] = "D";
answers[3] = "D";
answers[4] = "C";

// do they match or not? increment the different counters depending
for (var i=0;i<numQ;i++){
  if (theirInput[i]==answers[i]){
    correct++;
  }
  else{
    incorrect++;
  }
// need to account for unanswered radio buttons
// work that code in here
}



// the submit button should do same thing as when counter reaches 0
$("#submit").click(function() {
    counter = 0;
 });



