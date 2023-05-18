// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = '';
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);//at the bottom


//Prompted for password criteria, yes or no choices (confirm or not)
// var lowercase = 'abcdefghijklmnopqrstuvwxyz';
// var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var numeric = '0123456789';
// var symbols = ' !#$%&*+,-./:;<=>?()"@\^_`{|}~';


//Prompt for password length, if length = x, 
//Password length = 7 > x < 129 --> must enter number from 8 to 128

function passwordLength() {
    var length = prompt("Please choose a number of characters for your password, between 8 and 128");
    if (length < 8 || length > 128) {
       alert("You must choose a number higher than 7 or lower than 129.");
       passwordLength();
    } else if (7 > length < 129) {
        alert("You have chosen a password length of " + length + " characters");
        return length;
    } else {
        alert("Oops, that's not a number. Try again!");
        // prompt("Please choose a number of characters for your password, between 8 and 128");
        passwordLength();
    }
}      

function addLowercase() {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var addLowercase = confirm("Would you like to include lowercase characters to your password?");
    if (addLowercase) {
        passwordText += lowercase;
    //     addUppercase();
    // } else {
    //     addUppercase()
    // }   
}
}

function addUppercase() {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var addUppercase = confirm("Do you want to include uppercase characters?");    
        if (addUppercase) {
        passwordText += uppercase;
        }
    }
    //     addNumeric();  
    //  } else { 
    //     addNumeric();
    // }


function addNumeric() {
    var numeric = '0123456789';
    var addNumeric = confirm("Would you like to add numbers to your password?");
    if (addNumeric) {
        passwordText += numeric;
    }    
    //     addSymbols();
    // } else {
    //     addSymbols();
    // }
}

function addSymbols() {
    var symbols = ' !#$%&*+,-./:;<=>?()"@\^_`{|}~';
    var addSymbols = confirm("Would you like to add special characters to your password?");
    if (addSymbols) {
        passwordText += symbols;
        generatePassword();
    } 
 }

function generatePassword() {
    var length = passwordLength();
    addLowercase();
    addUppercase();
    addNumeric();
    addSymbols();
} return;





//There's a better way to do this:
// var passwordLUNS = lowercase + uppercase + numeric + symbol
// var passwordLUN = lowercase + uppercase + numeric
// var passwordLUS = lowercase + uppercase + symbol
// etc...


// Prompt for character types - confirm = true, deny = false
//If - true -"confirm" then concatenate current string to password generated
//If - false -"no"  nothing happens, password sttring does not change, next prompt


// To randomize selection: Math.floor(Math.random() * <variable>.length)
//if i = lengthSelected, 
    // for (var i = 0; i < lengthSelected; i++)

// Include lowercase characters? 

// prompt("Do you want to include lowercase characters?")
//     if (true) {
//     password = ''+ lowercase;  
// } else { 
//     uppercase.prompt("Do you want to include uppercase characters?")
//     if (true) {
//         addInput (uppercase)
//     } else {
//         numericPrompt();
//     } 
// }

// // Include numeric characters?
// numericPrompt("Do you want to include numeric characters?")
//     if (confirm) {
//         addInput (numeric)
//     } else {
//        symbolPrompt();
//     }

// // Include special characters (symbols)?
// symbolPrompt("Do yo want to include special characters?")
//     if (confirm) {
//         addInput (symbol)
//     } else {
//         generatePassword();
//     }

