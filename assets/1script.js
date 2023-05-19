
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword());

var characters = '';
var numberChars;

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

function passwordLength() {
    var numberChars = Number(prompt("Please choose a number of characters for your password, between 8 and 128"));
    if (numberChars < 8 || numberChars > 128 || isNaN(numberChars)) {
       alert("You must choose a number higher than 7 or lower than 129.");
       passwordLength();
    } else if (7 > numberChars < 129) {
        alert("You have chosen a password length of " + numberChars + " characters");
        return numberChars;
    } else {
        alert("Oops, that's not a number. Try again!");
        passwordLength();
        }
    window.numberChars = numberChars
    }      

function addLowercase() {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var addLowercase = confirm("Would you like to include Lowercase characters to your password?");
    if (addLowercase) {
        characters += lowercase;   
        } return characters;
    }

function addUppercase() {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var addUppercase = confirm("Would you like to include Uppercase characters to your password?");    
        if (addUppercase) {
     characters += uppercase;
     console.log(characters)
        } return characters;
    }

function addNumeric() {
    var numeric = '0123456789';
    var addNumeric = confirm("Would you like to include Numbers in your password?");
    if (addNumeric) {
        characters += numeric;
        console.log(characters)
        } return characters;  
    }

    console.log(numberChars)
    console.log(characters)

function addSymbols() {
    var symbols = ' !#$%&*+,-./:;<=>?()"@\^_`{|}~';
    var addSymbols = confirm("Would you like to add Special Characters to your password?");
    if (addSymbols) {
        characters += symbols;
        console.log(characters)
        } return characters;
    }

    
function generatePassword() {
    passwordLength();
    addLowercase();
    addUppercase();
    addNumeric();
    addSymbols();
    console.log(characters)
    if (characters.length < 1) {
        alert("You need to choose at least one set of characters, please try again.")
        generatePassword();
    } else {
        var chars = numberChars
        var password = '';
       for (var i = 0; i <+ chars; i++){
       random = Math.floor(Math.random() * chars.length);
       password += characters.substring(random, random+1);
       console.log(characters) //not making here
     }}
    }       
    
    // document.querySelector("#password").value = password;
     
    
      