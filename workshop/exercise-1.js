// -------------------------------------------------------------
// String Methods Exercises
// ----------
// note: need to have covered string methods for these exercises
// -------------------------------------------------------------

// Write to the console, the desired length of each of the following strings.
// When this exercise is complete, it should write all of the answers to the console one after the other.

// Given the following data to answer the questions.
const smartGuy = 'Rick Sanchez';
const rickSaying = 'wubba lubba dub dub';
const grandson = 'Morty Antoine Smith';
const enemies =
  'Tammy Gueterman, Evil Morty, Zeep Xanflorp, Galactic Federation, Council of Ricks, Phoenixperson, Scary Terry, Abradolf Lincler, Supernova';
const alternateRicks =
  'Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137';
const secret =
  "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!";
const notCode = [
  'summer',
  'bacon',
  'scary',
  'intergalactic',
  'jerry',
  'morty',
  'beth',
  'family',
];

// Q1.1
// How many names does Morty have? (use grandson)
let mortyFullname = grandson.split( ' ');
let totalNames = mortyFullname.length;
console.log(totalNames);
// Q1.2
// Convert the alternateRicks string to an array. Console that array.
let alternateRicksbox= alternateRicks.split(' , ' );
console.log(alternateRicksbox);
// Q1.3
// How many Ricks have been named in alternateRicks?
let typsofRick =0;
for (let i=0; i < alternateRicksbox.length;i++){
  if (alternateRicksbox[i].includes('Rick')){
    typsofRick +=1;
  }
}
console.log(typsofRick + '' + "is how many Ricks we have in total");
// Q1.4
// How many characters are there in rickSaying (without spaces)?
let ricksayingArray = rickSaying.split('');
let characters = 0;
for (let i = 0; i < ricksayingArray.length; i++) {
  if (ricksayingArray[i] !== ' ') {
    characters += 1;
  }
}
// Q1.4
// Morty doesn't actually have a middle name. Console Morty's name without "Antoine".
const actualName = grandson.replace('Antoine ', '')
console.log(actualName)
// Q1.5
// Decode and console. the secret!
// To do so, you will need to remove all of the notCode words.
let secretMessage = secret;
for (let i = 0; i < notCode.length; i++) {
  secretMessage = secretMessage.replace(notCode[i], '');
}
console.log(secretMessage);
// Q1.6 (Stretch Goal)
// Scary Terry is actually not an enemy. Remove him from the list and console only Rick's true enemies.
let actualEnemies = enemies.replace("Scary Terry", '')
console.log(actualEnemies);