// Assignment code here
// Input variables
var enter;
var confirmCharacter;
var confirmNumber;
var confirmLowercase;
var confirmUppercase;
var choices;
var pass;


// Variable values for each confirm
// Possible numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Possible Alphabet characters
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Capital Alphabet character
letter2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
   pass = generatePassword();
   document.getElementById("password").placeholder = pass;
});

// Function to generate password
function generatePassword() {
    enter = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Other user inputs
        confirmNumber = confirm("Will password contain numbers?");
        confirmCharacter = confirm("Will password contain special characters?");
        confirmLowercase = confirm("Will password contain Lowercase letters");
        confirmUppercase = confirm("Will password contain Uppercase letters?");
    };

    // If 4 negative responses

    if (!confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase) {
        choices = alert("You must choose a criteria!");
    }

    // If 4 positive responses
    else if (confirmNumber && confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = number.concat(letter, letter2, character);
    }

    //3 positive responses
    else if (confirmNumber && confirmCharacter && confirmLowercase) {
        choices = number.concat(character, letter);
    }
    else if (confirmNumber && confirmCharacter && confirmUppercase) {
        choices = number.concat(character, letter2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(letter, letter2);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(letter, letter2);
    }

    // 2 positive responses 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(letter);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(letter2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = letter.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = letter.concat(letter2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(letter2);
    }

    // 1 positive response
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmLowercase) {
        choices = letter;
    }
    else if (confirmUppercase) {
        choices = letter2;
    };

var password = [];

// Random selection for all variables
for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}

//joins password array and makes into string
var pass = password.join("");
UserInput(pass);
return pass;
}

//Password value into textbox
function UserInput(pass) {
    document.getElementById("password").textContent = pass;
}
