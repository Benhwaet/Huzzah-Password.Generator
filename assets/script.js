
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password").value
var passwordText = document.querySelector("#password")

var characters = '';
var numberChars = '';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var symbols = ' !#$%&*+,-./:;<=>?()"@\^_`{|}~';

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

function generatePassword() {
        var numberChars = (prompt("Please choose a number of characters for your password, between 8 and 128"));
        
            if (numberChars < 8 || numberChars > 128 || isNaN(numberChars)) {
                alert("You must choose a number higher than 7 or lower than 129.");
                generatePassword()
                } else if (7 > numberChars < 129) {
                    alert("You have chosen a password length of " + numberChars + " characters");
                } else {
                alert("Oops, try again!");
                generatePassword();
                }
      
        var addLowercase = confirm("Would you like to include -lowercase- characters to your password?");
            if (addLowercase) {
                characters += lowercase;   
                }
            
        var addUppercase = confirm("Would you like to include -uppercase- characters to your password?");    
            if (addUppercase) {
                 characters += uppercase;
                 console.log(characters)
                }
                
        var addNumeric = confirm("Would you like to include -numbers- in your password?");
            if (addNumeric) {
                characters += numeric;
                }  
        
        var addSymbols = confirm("Would you like to add -special characters/symbols- to your password?");
            if (addSymbols) {
                characters += symbols;
                }
                        
    
            if (characters.length < 1) {
                alert("You need to choose at least one set of characters, please try again.")
                generatePassword();
            } else if (characters.length > 1) {
       
        //      for (var i = 0; i <= numberChars; i ++) {
        // var random = Math.floor(Math.random() * characters.length);
        //         passwordText += characters.slice('');
                for (var i = 0; i <= numberChars; i++) {
                    var randomNumber = Math.floor(Math.random() * characters.length);
                    password += characters.substring(randomNumber, randomNumber +1);
                   }
            console.log(password)
     }      return password;
    }   
    
    generateBtn.addEventListener("click", writePassword);