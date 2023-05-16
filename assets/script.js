// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompted for password criteria, yes or no choices (confirm or not)
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var symbol = ' !#$%&*+,-./:;<=>?@\^_`{|}~';
var passwordLength = x;
x < 129, x > 7;

//Prompt for password length, if length = x, 
//Password length = 7 > x < 129 --> must enter number from 8 to 128

function click(length) {
    prompt("Please choose a number of characters for your password, between 8 and 128");
    if (length < 8) {
        alert("You must choose a number higher than 7.");
        length.prompt();
    } else if (length > 128) {
        window.alert("You must choose a number lower than 128");
        length.prompt();
    } else if (7 > length < 129) {
        window.alert("You have chosen a password length of " + length + " characters");
        lowercasePrompt();
    } else {
        window.alert("Oops, that's not a number. Try again!");
    } return prompt("Please choose a number of characters for your password, between 8 and 128");
}      

// Prompt for character types - "confirm" or "no" 
//If "confirm" then add input to password generated
//If "no" do not add input to password generated
// To randomize selection: Math.floor(Math.random() * <variable>.length)

// Include lowercase characters? 

prompt("Do you want to include lowercase characters?")
    if (confirm) {
    addInput (lowercase)  
} else {
    uppercasePrompt();
}

// Include uppercase characters?
uppercase.prompt("Do you want to include uppercase characters?")
    if (confirm) {
        addInput (uppercase)
    } else {
        numericPrompt();
    }

// Include numeric characters?
numericPrompt("Do you want to include numeric characters?")
    if (confirm) {
        addInput (numeric)
    } else {
       symbolPrompt();
    }

// Include special characters (symbols)?
symbolPrompt("Do yo want to include special characters?")
    if (confirm) {
        addInput (symbol)
    } else {
        generatePassword();
    }

