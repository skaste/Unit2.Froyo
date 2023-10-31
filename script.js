// console.log(`Test for the FroYo!!!`);
//create prompt to collect user flavors
const userInputFlavors = prompt(`Please enter Froyo flavors with commas`, 
"strawberry, vanilla, chocolate, black cherry");
//Take user input strings and split into an array of strings using const array = stringList.split(", ")
const stringArray = userInputFlavors.split(", ");
// console.log(stringArray);
//create an object with keys that are flavors
// const flavors = {

// }
//have stringArray push userInputFlavors into the object as keys
//log to the console how many of each flavor they have ordered
const typeOfFlavor = userInputFlavors;
let countOne = (typeOfFlavor.match(/vanilla/g) || []).length;
let countTwo = (typeOfFlavor.match(/strawberry/g) || []).length;
let countThree = (typeOfFlavor.match(/chocolate/g) || []).length;
let countFour = (typeOfFlavor.match(/black cherry/g) || []).length;
console.log(countOne [`Vanilla`]);
