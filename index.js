// PART 1 - VARIABLES

// Create a variable called highScore that stores the value 999
let highScore = 999;
// Print the value of highScore to the console using console.log()
console.log(highScore);
// Reassign the value of highScore to 2000
highScore = 2000;
// Print the value of highScore to the console again
console.log(highScore);
// PART 2 - WORKING WITH STRINGS

// Create a variable called firstName that stores your name as a string
let firstName = "Justin";
// Create a variable called welcomeMessage that stores a greeting
// This greeting should include the value of firstName
// Example output: "Hello [firstName], how are you today?"
let welcomeMessage = "Welcome sir " + firstName + ", how are you today?";
// Print welcomeMessage to the console
console.log(welcomeMessage);

// PART 3 - ARRAYS

// Create a variable called myArray that stores the following:
// Index 0: a string that says “Good morning!”
// Index 1: the boolean value false
// Index 2: the number 8
let myArray = [["Good morning!"], [false], [8]];
// Get the value 8 from the array using its index and print to the console
console.log(myArray[2]);
// Directly set the value at index 3 to the number 100
myArray[3] = 100;
// Append the string “computers” to the array using the push() method
myArray.push("computers");
// Print the entire array using console.log()
console.log(myArray);
// Remove the last element of the array using pop()
let popped = myArray.pop("computers");
// Store it in a variable called popped
// Print the new array using console.log()
console.log(myArray);
// Print the value of popped using console.log()
console.log(popped);
