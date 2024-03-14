function validatePassword(password1, password2) {
    let hasNumber = false;
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasMinLength = password1.length >= 8;

    if (password1 == password2) {

        for (let i = 0; i < password1.length; i++) {
            const char = password1[i];

            if (isNaN(parseInt(char))) {
                hasNumber = true;

                if (char === char.toUpperCase()) {
                    hasUpperCase = true;
                }

                if (char === char.toLowerCase()) {
                    hasLowerCase = true;
                }
            }
        }
    }

    return hasNumber && hasUpperCase && hasLowerCase && hasMinLength;
}

console.log(validatePassword("helloworld", "hello"))   // returns false
console.log(validatePassword("hello", "hello")) 	  // returns false
console.log(validatePassword("hello1234", "hello1234"))  // returns false
console.log(validatePassword("Hello1234", "Hello1234"))  // returns true
console.log(validatePassword("HELLO1234", "HELLO1234"))  // returns false
