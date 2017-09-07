// Load the NPM Package inquirer
var inquirer = require("inquirer");
var firebase = require("firebase");
var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");

var config = {
    apiKey: "AIzaSyByDL4zAww8cXkuz47u_-tq7iHeXBE8cAA",
    authDomain: "flashcard-generator-4d198.firebaseapp.com",
    databaseURL: "https://flashcard-generator-4d198.firebaseio.com",
    projectId: "flashcard-generator-4d198",
    storageBucket: "flashcard-generator-4d198.appspot.com",
    messagingSenderId: "446070040229"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var name = '';

//   var usersRef = ref.child("users");
// usersRef.set({
//   " ": {
//     full_name: " "
//   }
// });

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your full name?",
      name: "username"
    },
    {
      type: "input",
      message: "Which kind of flashcard would you like to make?",
      choices: ["basic", "cloze"],
      name: "flashcards"
    }
  ])
  .then(function(inquirerResponse) {
      if(inquirerResponse.flashcards === 'basic') {
        promptBasic();
      } else {
        promptCloze();
      }
  });

function promptBasic() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your question for the front side?",
        name: "frontBasic"
        default: "You didn't enter a question."
    }
      },
      {
        type: "input",
        message: "What is your answer for the back?",
        name: "backBasic"
        default: function () {
			return 'Add your full text here.';
    }
      },
      {
        type: "confirm",
        message: "Would you like to make another flashcard?",
        name: "confirm",
        default: true
      }
    ])
    .then(function(inquirerResponse) {


        if(inquirerResponse.confirm) {
          promptBasic();
          storeBasicData();
          //console.log(inquirerResponse.flashcards);
        } else {
          flashcardPractice();
          storeBasicData();
        }
      })
    }

    function promptCloze() {
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is your partial statement?",
            name: "clozePartial"
          },
          {
            type: "input",
            message: "What is your answer for the back?",
            name: "backCloze"
          },
          {
            type: "confirm",
            message: "Would you like to make another flashcard?",
            name: "confirm",
            default: true
          }
        ])
        .then(function(inquirerResponse) {
            if(inquirerResponse.confirm) {
              promptCloze();
            } else {
              flashcardPractice();
            }
          })
        }

function storeBasicData() {
  var basicFlashcard = {
    name: name,
    front: front,
    back: back
  }
  database.ref().push(basicFlashcard);
  console.log(basicFlashcard);
}
// function flashcardPractice() {
//   var flashCards = {
// 		name: name,
// 		movieId: movieId
// 	}
// 	database.ref().push(reviewOb);
// 	console.log('review on click ' + review);
// }
