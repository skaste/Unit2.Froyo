// console.log(`Test for the FroYo!!!`);
//create prompt to collect user flavors
// const userInputFlavors = prompt(`Please enter Froyo flavors with commas`, 
// "strawberry, vanilla, chocolate, black cherry");
//Take user input strings and split into an array of strings using const array = stringList.split(", ")
// const stringArray = userInputFlavors.split(", ");
// console.log(stringArray);
//create an object with keys that are flavors


// let flavors = {};
// let userInputFlavors=prompt(`Please enter Froyo flavors with commas`, 
// "strawberry, vanilla, chocolate, black cherry")
// flavors.data = userInputFlavors;

// const stringArray = userInputFlavors.split(", ");
// console.log(stringArray);
// flavorType()


//have stringArray push userInputFlavors into the object as keys
//log to the console how many of each flavor they have ordered
// const typeOfFlavor = userInputFlavors;
// let countVanilla = (typeOfFlavor.match(/vanilla/g) || []).length;
// let countStrawberry = (typeOfFlavor.match(/strawberry/g) || []).length;
// let countChocolate = (typeOfFlavor.match(/chocolate/g) || []).length;
// let countBlackCherry = (typeOfFlavor.match(/black cherry/g) || []).length;
// console.log((`${countVanilla} vanilla`),(`${countStrawberry} strawberry`),
// (`${countChocolate} chocolate`),(`${countBlackCherry} black cherry`));

// Function to count froyo flavors and display results in the console
function countFlavors() {
  // Prompt the user to enter a list of comma-separated froyo flavors
  const input = prompt("Enter a list of comma-separated froyo flavors:");
  console.log("userInput:", input)
  // Check if the user canceled the prompt
  if (input === null) {
      console.log("Input canceled.");
      return;
  }
  // Split the input into an array of flavors using a comma as the separator
  const flavors = input.split(",");
  console.log("Input split into array", flavors);
  // Create an object to store the counts of each flavor
  const flavorCounts = {};
  // Loop through the array of flavors and count their occurrences
  for (const flavor of flavors) {
      if (flavorCounts[flavor]) {
          flavorCounts[flavor] += 1;
      } else {
          flavorCounts[flavor] = 1;
      }
  }
  console.log("Flavor Counts", flavorCounts)
  // Display the flavor counts in the console
  for (const flavor in flavorCounts) {
      console.log(`Flavor: ${flavor}, Quantity: ${flavorCounts[flavor]}`);
  }
}
// Call the function to start the flavor counting process
countFlavors();