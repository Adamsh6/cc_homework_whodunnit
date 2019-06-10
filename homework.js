Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//Predicted Output: Miss Scarlet

//Reason: declareMurderer function refers to muderer value from scenario object. The result of that function is set to the verdict variable, which is then printed



Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//Output: Professor Plum (if the code doesn't break)

//Reason: The murderer variable is set as a constant -> "Professor Plum". That variable is then used in the declareMurderer function, the result of which is assigned to the verdict variable.


Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//Output:
//First Verdict: The murderer is Mrs. Peacock
//Second Verdict: The murderer is Professor Plum

//Reason: The first verdict is the result of the declareMurderer function, which uses let to create a local instance of murderer where the murderer is Mrs. Peacock.
//The second verdict uses the variable murderer which was declared in the same scope, which is Professor Plum. Mrs Peacock was only declared within the function scope, so does not affect the murderer variable outside the function


Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//Output:
// The suspects are Miss Scarlet, Professor Plum, Colonel Mustard
// Suspect three is Mrs. Peacock

//Reason:
//For the first statement, the function is within the scope of the previously declared variables, so can access them. It has its own instance of suspectThree, which it uses instead of the higher scoped instance
//For the second statement, since the 'Colonel Mustard' version of suspectThree was only declared within the function's scope, it did not affect the higher scoped version


Episode 5

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

//Output: The weapon is the Revolver

//Reason: Since scenario is an object, even though it is a constant, its attributes can be changed. The function changeWeapon is called to change the weapon to Revolver, and the verdict is assigned the result of declareWeapon after changeWeapon is called


Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//Output: The murderer is Mrs. White

//Reason: The function changeMurderer first changes the murderer to Mr Green, then runs the nested function plotTwist, which changes the murderer again to Mrs White. The verdict is then assigned the return value of the declareMurderer function, which uses the current murderer, which is still Mrs White.

Episode 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//Output: The murderer is Mr Green

//Reason: The nested function plotTwist this time declares a new instance of murderer, which persists into the function ran within. The only statement that changes the murderer is murderer = Mr Green.


Episode 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

//Output: The weapon is Candle Stick

//Reason: When changeScenario is run, the murderer is changed to Mrs Peacock, and the room is changed to the dining room, then plotTwist is run inside that function, which changes the murderer to Colonel Mustard, and then unexpectedOutcome is ran inside that function, which changes the weapon to Candle Stick. Therefore when declareWeapon is ran, the weapon is candlestick



Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//Output: The murderer is Professor Plum

//Reason: The murderer is redifined using let inside a block, which does not affect what occurs outside the block, so Proffessor Plum stays the murderer
