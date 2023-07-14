// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
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

function simpleScore(word) {
  return word.length
};

function vowelBonusScore(word) {
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  let score = 0;
  word = word.toUpperCase();
  for(let i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])) {
      score += 3;
    } else {
      score += 1;
    }
  }
  return score;
} ;

// let letter = (input.question("Enter a scrabble word please: "));
// letter = letter.toLowerCase();


function scrabbleScore(word) {
  let score = 0;
  word = word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    score += newPointStructure[word[i]];
  }  
  return score;
} ;

const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoreFunction: simpleScore
  },
  {
    name: "Bonus Vowels",
    description: "Vowels are 3pts, consonants are 1 pt.",
    scoreFunction: vowelBonusScore
  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoreFunction: scrabbleScore
  },
];


function scorerPrompt() {
   console.log(`\nWhich scoring algorithm would you like to use?`)
  for(let i = 0; i < scoringAlgorithms.length; i++){
    console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`) 
    }
    let scoreQuestion = Number(input.question(`\nEnter 0, 1, or 2: `)); 
    console.log(`Score for '${intro}': ${scoringAlgorithms[scoreQuestion].scoreFunction(intro)}`) 
  }{}

function transform(words) {
  let newWordPoints = {};
  for (let newOrder in words) {
    let simple = words[newOrder]
    for (let i = 0; i < simple.length; i++) {
      newWordPoints[simple[i].toUpperCase()] = Number(newOrder);
    }
  }
  return newWordPoints;
};


let newPointStructure = transform(oldPointStructure);

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
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};