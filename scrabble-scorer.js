const input = require('readline-sync');

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer (word) {
    word = word.toUpperCase();
    let letterPoints = "";

    for(let i = 0; i < word.length; i++) {
        for(const pointValue in oldPointStructure) {
            if(oldPointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
            }
        }
    }
    return letterPoints;
};

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function initialPrompt() {
    console.log(`Let's play some scrabble!\n `);
    let prompt = input.question(`Enter a word to score: `);
    return prompt;
};

function simpleScore (word) {
  return word.length;
};


function vowelBonusScore(word) {
  let vowels = ['A','E','I','O','U'];
  let vowelPoints = 3;
  let vowelScore = 0;
  let wordArray =[];
  let vowelWord = word.toUpperCase();
  wordArray = vowelWord.split('');
    for (let i = 0; i < word.length; i++){
        if (vowels.includes(wordArray[i])){
            vowelScore = vowelPoints + vowelScore;
        } else {
            vowelScore = vowelScore + 1;
        }
        }
    wordArray.join('')
    vowelWord.toUpperCase();
    return vowelScore;  
};


let scrabbleScore = function (word) {
  let score = 0;
  for(let i = 0; i < word.length; i++) {
    score += Number(newPointStructure[word[i]]);
  }
  return score;
};

const scoringAlgorithms = [
    {
        name: 'Simple Score',
        number: '0',
        description: '0 - One point per character.',
        scoringFunction: simpleScore
},
    {
        name: 'Vowel Bonus Score',
        number: '1',
        description: '1 - Vowels are worth 3 points.',
        scoringFunction: vowelBonusScore
},
    {
        name: 'Scrabble Score',
        number: '2',
        description: '2 - Uses scrabble point system.',
        scoringFunction: scrabbleScore
}];

function scorerPrompt(word) {
    numberInput = input.question(`\nWhich scoring algorithm would you like to use?\n
    0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
    1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
    2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}
    \nPlease enter 0, 1, or 2: `);
  
    if (numberInput === '0') {
      return (`Score for ${word}: ${scoringAlgorithms[0].scoringFunction(word)}`);
    } else if (numberInput === '1') {
      return (`Score for ${word}: ${scoringAlgorithms[1].scoringFunction(word)}`);
    } else if (numberInput === '2') {
      return  (`Score for ${word}: ${scoringAlgorithms[2].scoringFunction(word)}`)
    } else {
      console.log('Invaild number');
      scorerPrompt();
    }
  }

function transform(oldPointStructure) {
  // Loops through each array inside oldPointStructure
  let newPtObject = {}; // empty array
  for(let key in oldPointStructure) {
    for(let i = 0; i < oldPointStructure[key].length; i++) {
      newPtObject[oldPointStructure[key][i].toLowerCase()] = Number(key);
    }
  }
  return newPtObject;
};

let newPointStructure = transform(oldPointStructure);

// console.log('letter p: ', newPointStructure.p);
// console.log('letter j: ', newPointStructure.j);
// console.log('the word is pineapple: ', oldScrabbleScorer('pineapple'));
// console.log('Pineapple oldScrabbleScorer ' + (sum = 3+1+1+1+1+3+3+1+1+1));
function runProgram() {
    transform(oldPointStructure);
    let prompt = initialPrompt();
    console.log (scorerPrompt(prompt));
    
};

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