
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password").value
var passwordText = document.querySelector("#password")

var characters = '';
var numberChars = '';

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

function passwordLength() {
    var numberChars = (prompt("Please choose a number of characters for your password, between 8 and 128"));
    
    if (numberChars < 8 || numberChars > 128 || isNaN(numberChars)) {
       alert("You must choose a number higher than 7 or lower than 129.");
       passwordLength();
    } else if (7 > numberChars < 129) {
        alert("You have chosen a password length of " + numberChars + " characters");
        return numberChars;
    } else {
        alert("Oops, try again!");
        passwordLength();
        }
    }      
console.log(length)
console.log(numberChars)

function addLowercase() {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var addLowercase = confirm("Would you like to include -lowercase- characters to your password?");
    if (addLowercase) {
        characters += lowercase;   
        } return characters;
    }

function addUppercase() {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var addUppercase = confirm("Would you like to include -uppercase- characters to your password?");    
        if (addUppercase) {
     characters += uppercase;
     console.log(characters)
        } return characters;
    }

function addNumeric() {
    var numeric = '0123456789';
    var addNumeric = confirm("Would you like to include -numbers- in your password?");
    if (addNumeric) {
        characters += numeric;
        console.log(characters)
        } return characters;  
    }


function addSymbols() {
    var symbols = ' !#$%&*+,-./:;<=>?()"@\^_`{|}~';
    var addSymbols = confirm("Would you like to add -special characters/symbols- to your password?");
    if (addSymbols) {
        characters += symbols;
        
        } return characters;
    }

  console.log(password) 
  console.log(characters)
  console.log(numberChars)

function generatePassword() {
    var password = '';
    
    passwordLength();
    addLowercase();
    addUppercase();
    addNumeric();
    addSymbols();
    
    console.log(characters)
    console.log(characters.length)
    
    if (characters.length < 1) {
        alert("You need to choose at least one set of characters, please try again.")
        generatePassword();
    } else if (characters.length > 1) {
       
    for (var i = 0; i <= numberChars; i ++) {
       
        password = Math.floor(Math.random() * characters.length);
    //    password = mixup.split(0, numberChars);
       
       console.log(characters) //not making it here?
     }

    }   return password;
    }       
    
    generateBtn.addEventListener("click", writePassword);

   
     
    
      