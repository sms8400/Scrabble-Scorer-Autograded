// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
	return letterPoints;
 }
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


let intro = "";

function initialPrompt() {
  intro = input.question("Let's play some scrabble!\nPlease enter a word to be scored: ")
  return intro;
}

function simpleScorer(word) {
  word = word.toUpperCase();
  simpleScoreArray = word.split('');
  letterPoints = simpleScoreArray.length
  return letterPoints
};

function vowelBonusScorer(word) {
  word = word.toUpperCase();
  vowelBonusScorerArray = word.split('');
  letterPoints = 0
    for(let i=0; i<vowelBonusScorerArray.length ; i++){
      if (vowelBonusScorerArray[i] === 'A' || vowelBonusScorerArray[i] === 'E' || vowelBonusScorerArray[i] === 'I' || vowelBonusScorerArray[i] === 'O' || vowelBonusScorerArray[i] === 'U'){
        letterPoints+=3
      } else {
        letterPoints +=1
      }
    }
  return letterPoints
};

// let letter = (input.question("Enter a scrabble word please: "));
// letter = letter.toLowerCase();


function scrabbleScorer(word) {
  word = word.toLowerCase()
  letterPoints = 0
  for(let i = 0; i<word.length; i++){
    letterPoints += newPointStructure[word[i]]
  }
  return letterPoints
};

let simpleScoreObj = {
  name: 'Simple Score',
  description: 'Each letter is worth 1 point.',
  scoringFunction: simpleScorer
};

let vowelBonusScoreObj = {
  name: 'Bonus Vowels',
  description: 'Vowels are 3 pts, consonants are 1 pt.',
  scoringFunction: vowelBonusScorer
};

let scrabbleScorerObj = {
  name: 'Scrabble',
  description: 'The traditional scoring algorithm.',
  scoringFunction: scrabbleScorer
}

const scoringAlgorithms = [simpleScoreObj, vowelBonusScoreObj, scrabbleScorerObj]


function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?\n\n");
  for(let i = 0; i<scoringAlgorithms.length; i++){
    console.log(`${i} – ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
  }
  scorerPromptToSave = input.question("Enter 0, 1, or 2: ");
  scorerPromptToSave = Number(scorerPromptToSave)
  console.log (`Score for '${intro}': ${scoringAlgorithms[scorerPromptToSave].scoringFunction(intro)}`)
}


function transform(pointStructure) {
  let newPointStruct = {};
  for (key in pointStructure) {
    for (let i = 0; i < pointStructure[key].length; i++){
      let letterItem = pointStructure[key][i];
      letterItem = letterItem.toLowerCase();
      newPointStruct[`${letterItem}`] = Number(key);
    };
  };
  return newPointStruct;
};


let newPointStructure = transform(oldPointStructure);
newPointStructure[" "] = 0;

function runProgram() {
   initialPrompt();
   scorerPrompt();

}

// console.log(`Score for ${intro}: ${scoringAlogoriths(scoreQuestion).scoreFunction(intro).newPointStructure}`);


// Don't write any code below this line //
// Changes two this section will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};