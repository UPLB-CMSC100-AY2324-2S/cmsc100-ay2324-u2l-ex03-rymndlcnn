// Raymond Licuanan
// U2L
// Exercise 03: JavaScript Basics Part 1

// Function for password validation
function validatePassword(password1, password2) {
    let hasNumber = false;  // initialize variables to false
    let hasUpperCase = false;   // initialize variables to false
    let hasLowerCase = false;   // initialize variables to false
    let hasMinLength = password1.length >= 8;   // check if password has a minimum length of 8  characters

    // compare 2 passwords thru equality operators
    if (password1 == password2) {
        // loop through the password
        for (let i = 0; i < password1.length; i++) {
            // get the character at the current index
            const char = password1[i];

            // check if the character is a number
            if (isNaN(parseInt(char))) {
                hasNumber = true;

                // check if the character is an uppercase letter
                if (char === char.toUpperCase()) {
                    hasUpperCase = true;
                }

                // check if the character is a lowercase letter
                if (char === char.toLowerCase()) {
                    hasLowerCase = true;
                }
            }
        }
    }

    // return the result of the conditions
    return hasNumber && hasUpperCase && hasLowerCase && hasMinLength;
}

console.log(validatePassword("helloworld", "hello"))   // returns false
console.log(validatePassword("hello", "hello")) 	  // returns false
console.log(validatePassword("hello1234", "hello1234"))  // returns false
console.log(validatePassword("Hello1234", "Hello1234"))  // returns true
console.log(validatePassword("HELLO1234", "HELLO1234"))  // returns false

// Function for reversing the password
function reversePassword(password) {
    let temp = "";  // Initialize an empty string to store the reversed password

    // Loop through the password
    for (let i = password.length-1; i >= 0; i--) {
        // Append the character at the current index to the temp string
        temp = temp + password.charAt(i);
    }
    // Return the reversed password
    return temp;
}

// Test the reversePassword function with a sample input
const password = "RaymondLi1234";
console.log(password)
console.log(reversePassword(password))

// Function for storing the name and password to an object
function storePassword(name, pass1, pass2) {
    const person = {}   // Initialize an empty object

    person.name = name;     // Assign the name to the object

    // Check if the passwords are valid
    if (pass1.length < 8 || pagss2.length < 8) {
        console.log("Insufficient Number of Strings!")
    } else if (pass1 !== pass2) {
        console.log("Wrong Password!")
    } else if (!validatePassword(pass1, pass2)) {
        console.log("Invalid Password!")
    } else if(validatePassword(pass1, pass2)){
        person.newpassword = reversePassword(pass1);
        console.log(person)
    }

    // Return the object
    return person;
}


storePassword("John", "Pass1234", "Pass1234") // returns {name: "John", newpassword:"4321ssaP"}
storePassword("John", "pass1234", "pass1234") // prompts “Invalid Password!”
storePassword("John", "pass1234", "pass1234567") //prompts “Wrong Password!”
storePassword("John", "pass1", "pass1") //prompts “Insufficient Number of Strings!”
