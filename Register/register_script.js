function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    var uppercaseRegex = /[A-Z]/;
    var specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    var numberRegex = /\d/;

    if (!uppercaseRegex.test(password) || !specialCharacterRegex.test(password) || !numberRegex.test(password)) {
        passwordError.innerHTML = "(Password must contain at least one uppercase letter, one special character, and one number)";
        return false;
    } else {
        passwordError.innerHTML = "";
    }

    if (password !== confirmPassword) {
        confirmPasswordError.innerHTML = "(Passwords do not match)";
        return false;
    } else {
        confirmPasswordError.innerHTML = "";
    }

    return true;
}
