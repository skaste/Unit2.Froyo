// console.log(`Test for the FroYo!!!`);
//create prompt to collect user flavors
const userInputFlavors = prompt(`Please enter Froyo flavors with commas`, 
"strawberry, vanilla, chocolate, black cherry, etc");
//Take user input strings and split into an array of strings using const array = stringList.split(", ")
const stringArray = userInputFlavors.split(", ");
console.log(stringArray);