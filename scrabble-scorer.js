// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

// const input = require("readline-sync");

// const oldPointStructure = {
//   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
//   2: ['D', 'G'],
//   3: ['B', 'C', 'M', 'P'],
//   4: ['F', 'H', 'V', 'W', 'Y'],
//   5: ['K'],
//   8: ['J', 'X'],
//   10: ['Q', 'Z']
  
// };

// function oldScrabbleScorer(word) {
// 	word = word.toUpperCase();
// 	let letterPoints = "";
 
// 	for (let i = 0; i < word.length; i++) {
 
// 	  for (const pointValue in oldPointStructure) {
 
// 		 if (oldPointStructure[pointValue].includes(word[i])) {
// 			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
// 		 }
 
// 	  }
// 	}
// 	return letterPoints;
//  }

// // your job is to finish writing these functions and variables that we've named //
// // don't change the names or your program won't work as expected. //


// let intro = "";

// function initialPrompt() {
//   intro = input.question("Let's play some scrabble!\nPlease enter a word to be scored: ")
//   return intro;
// }

// function simpleScore(word) {
//   return word.length
// };

// function vowelBonusScore(word) {
//   let vowels = ['A', 'E', 'I', 'O', 'U'];
//   let score = 0;
//   word = word.toUpperCase();
//   for(let i = 0; i < word.length; i++) {
//     if(vowels.includes(word[i])) {
//       score += 3;
//     } else {
//       score += 1;
//     }
//   }
//   return score;
// } ;

// // let letter = (input.question("Enter a scrabble word please: "));
// // letter = letter.toLowerCase();


// function scrabbleScore(word) {
//   let score = 0;
//   word = word.toUpperCase();
//   for (let i = 0; i < word.length; i++) {
//     score += newPointStructure[word[i]];
//   }  
//   return score;
// } ;

// const scoringAlgorithms = [
//   {
//     name: "Simple Score",
//     description: "Each letter is worth 1 point.",
//     scoreFunction: simpleScore
//   },
//   {
//     name: "Bonus Vowels",
//     description: "Vowels are 3pts, consonants are 1 pt.",
//     scoreFunction: vowelBonusScore
//   },
//   {
//     name: "Scrabble",
//     description: "The traditional scoring algorithm.",
//     scoreFunction: scrabbleScore
//   },
// ];


// function scorerPrompt() {
//    console.log(`\nWhich scoring algorithm would you like to use?`)
//   for(let i = 0; i < scoringAlgorithms.length; i++){
//     console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`) 
//     }
//     let scoreQuestion = Number(input.question(`\nEnter 0, 1, or 2: `)); 
//     console.log(`Score for '${intro}': ${scoringAlgorithms[scoreQuestion].scoreFunction(intro)}`) 
//   }{}

// function transform(words) {
//   let newWordPoints = {};
//   for (let newOrder in words) {
//     let simple = words[newOrder]
//     for (let i = 0; i < simple.length; i++) {
//       newWordPoints[simple[i].toUpperCase()] = Number(newOrder);
//     }
//   }
//   return newWordPoints;
// };


// let newPointStructure = transform(oldPointStructure);

// function runProgram() {
//    initialPrompt();
//    scorerPrompt();

// }

// // console.log(`Score for ${intro}: ${scoringAlogoriths(scoreQuestion).scoreFunction(intro).newPointStructure}`);



const input = require('readline-sync');

// function to turn all the new keys into lower case 
let toLowerCaseKeys = (obj) => {
   return Object.keys(obj).reduce((c, k) => (c[k.toLowerCase()] = obj[k], c), {});
}
// Code your transform function here:
let transform = (oldPointStructure) => {
let arr ={};

for (key = 0 ; key < 11 ; key++){
   
   for (item in oldPointStructure){ 
   arr[oldPointStructure[item][key]] = item;
}
}
// deleting the empty cell from the new array 
delete arr.undefined;
return arr;
}
// initialPrompt function 
const initialPrompt = () => {

console.log('Welcome to the Scrabble score calculator!');
console.log();
console.log('Which scoring algorithm would you like to use?');
console.log();
console.log('0 - Scrabble: The traditional scoring algorithm.');
console.log('1 - Simple Score: Each letter is worth 1 point.');
console.log('2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.');
console.log();
let choiceAlgorithm = input.question('Enter 0, 1, or 2: ');
/*while((Number(choiceAlgorithm) > 2))
{

let choiceAlgorithmFixed = input.question("You must enter a valid number 0, 1 ,or 2 : ");

choiceAlgorithm = choiceAlgorithmFixed ;

}*/
return choiceAlgorithm ;
}
// Code your runProgram function here:
let runProgram = (scoringAlgorithms) =>{

//2.call initialPrompt
let algo = initialPrompt();
console.log();
console.log(`Using algorithm : ${scoringAlgorithms[algo].name}`);
console.log();
let wordToCalculate = input.question('Enter a word to be scored,or "Stop" to quit : ');  ;
//while loop to check against stop 
do {
// condition for using scrabble score function 
if (algo === '0' ){

let score = scoringAlgorithms[algo].scoreFunction(wordToCalculate,newPointStructure);
console.log(`Score for '${wordToCalculate}': ${score}`);

}else{
// condition for using other 2 scoring algoritms with only the word
let score = scoringAlgorithms[algo].scoreFunction(wordToCalculate);
console.log(`Score for '${wordToCalculate}': ${score}`);
}
//testing condition for stop 
wordToCalculate = input.question('Enter a word to be scored,or "Stop" to quit : ');

}while (wordToCalculate.toLowerCase() !== 'stop' )
}
// Here is the oldPointStructure object:
const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10:['Q', 'Z']
};

// Use the transform function to create the newPointStructure object here:

let newPointStructure = toLowerCaseKeys(transform(oldPointStructure));
// Create your scoringAlgorithms array here:
// Scoring objects 

let scrabbleObj = {
name : "Scrabble",
 description : "The traditional scoring algorithm.",
 scoreFunction : function scrabble(word , newPointStructure){ let score = 0;
 
 for (let i=0; i< word.length ;i++){   
  score = score + Number(newPointStructure[word.charAt(i).toLowerCase()]); // important for uppercase letter
 }

return score ;}
} 

let simpleScoreObj = {
  name : "Simple Score",
 description : "Each letter is worth 1 point.",
 scoreFunction : function simpleScore(word){let score = 0;
  for(let i= 0; i<word.length ; i++)
  {
    score = score + 1;
  };
  return score}
} 

let bonusVowelsObj = {
  name : "Bonus Vowels",
 description : "Vowels are 3 pts, consonants are 1 pt.",
 scoreFunction : function bonusVowels(word){let score = 0;
let vowels = ['a','e','i','o','u'];
for(let i= 0; i<word.length ; i++){
  if (vowels.includes(word[i])){
   
    score = score + 3;
  } else {

    score = score + 1;
  };

};
return score;}
} 
// scoring algorithms array 
let scoringAlgorithms = [scrabbleObj,simpleScoreObj,bonusVowelsObj];
// Call the runProgram function here:
runProgram(scoringAlgorithms);









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