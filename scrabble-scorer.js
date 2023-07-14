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

let wordToSave = ""

function initialPrompt() {
   wordToSave = input.question ("Let's play some scrabble!\n\nEnter a word to score: ");
  return wordToSave
};

function simpleScore(word){
  word = word.toUpperCase();
  simpleScoreArray = word.split('');
  letterPoints = simpleScoreArray.length
  return letterPoints
};

function vowelBonusScore(word){
  word = word.toUpperCase();
  vowelBonusScoreArray = word.split('');
  letterPoints = 0
    for(let i=0; i<vowelBonusScoreArray.length ; i++){
      if (vowelBonusScoreArray[i] === 'A' || vowelBonusScoreArray[i] === 'E' || vowelBonusScoreArray[i] === 'I' || vowelBonusScoreArray[i] === 'O' || vowelBonusScoreArray[i] === 'U'){
        letterPoints+=3
      } else {
        letterPoints +=1
      }
    }
  return letterPoints
};

function scrabbleScore(word){
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
  scoringFunction: simpleScore
};

let vowelBonusScoreObj = {
  name: 'Bonus Vowels',
  description: 'Vowels are 3 pts, consonants are 1 pt.',
  scoringFunction: vowelBonusScore
};

let scrabbleScorerObj = {
  name: 'Scrabble',
  description: 'The traditional scoring algorithm.',
  scoringFunction: scrabbleScore
}

const scoringAlgorithms = [simpleScoreObj, vowelBonusScoreObj, scrabbleScorerObj]

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?\n\n");
  for(let i = 0; i<scoringAlgorithms.length; i++){
    console.log(`${i} – ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
  }
  scorerPromptToSave = input.question("Enter 0, 1, or 2: ");
  scorerPromptToSave = Number(scorerPromptToSave)
  console.log (`Score for '${wordToSave}': ${scoringAlgorithms[scorerPromptToSave].scoringFunction(wordToSave)}`)
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

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

