function registerAccount() {
    // Validate inputs (you may add more complex validation)
    var userId = document.getElementById('userId').value.trim();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var colorPattern = document.getElementById('colorPattern').value.trim();
    var securityQuestion = document.getElementById('securityQuestion').value.trim();
    var securityAnswer = document.getElementById('securityAnswer').value.trim();

    // Basic validation example (you should implement more)
    if (!userId || !name || !email || !password || !colorPattern || !securityAnswer) {
        document.getElementById('registerError').innerText = "All fields are required.";
        return;
    }

    // Submit the form data to server or process as needed
    // For demonstration, just log the inputs
    console.log("User ID:", userId);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // console.log("Color Pattern:", colorPattern);
    console.log("Security Question:", securityQuestion);
    console.log("Security Answer:", securityAnswer);

    // Optionally, clear form inputs or show success message
    document.getElementById('registerError').innerText = "";
}

function loginAccount() {
    // Similar validation and processing logic for login
    var loginEmail = document.getElementById('loginEmail').value.trim();
    var loginPassword = document.getElementById('loginPassword').value.trim();

    // Basic validation example
    if (!loginEmail || !loginPassword) {
        document.getElementById('loginError').innerText = "Email and password are required.";
        return;
    }

    // Submit login data to server or process as needed
    console.log("Login Email:", loginEmail);
    console.log("Login Password:", loginPassword);

    // Optionally, clear form inputs or show success message
    document.getElementById('loginError').innerText = "";
}

function resetPassword() {
    // Similar logic for password reset
    var forgotEmail = document.getElementById('forgotEmail').value.trim();

    // Basic validation example
    if (!forgotEmail) {
        document.getElementById('resetPasswordError').innerText = "Email is required.";
        return;
    }

    // Submit email for password reset to server or process as needed
    console.log("Reset Password Email:", forgotEmail);

    // Optionally, clear form inputs or show success message
    document.getElementById('resetPasswordError').innerText = "";
}

function remindEmail() {
    // Similar logic for email reminder
    var userIdReminder = document.getElementById('userIdReminder').value.trim();

    // Basic validation example
    if (!userIdReminder) {
        document.getElementById('remindEmailError').innerText = "User ID is required.";
        return;
    }

    // Submit User ID for email reminder to server or process as needed
    console.log("User ID for Email Reminder:", userIdReminder);

    // Optionally, clear form inputs or show success message
    document.getElementById('remindEmailError').innerText = "";
}

// Toggle between forms based on user choice
function showRegisterForm() {
    document.getElementById('registerForm').style.display = "block";
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('forgotPasswordForm').style.display = "none";
    document.getElementById('forgotEmailForm').style.display = "none";
}

function showLoginForm() {
    document.getElementById('registerForm').style.display = "none";
    document.getElementById('loginForm').style.display = "block";
    document.getElementById('forgotPasswordForm').style.display = "none";
    document.getElementById('forgotEmailForm').style.display = "none";
}

function showForgotPasswordForm() {
    document.getElementById('registerForm').style.display = "none";
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('forgotPasswordForm').style.display = "block";
    document.getElementById('forgotEmailForm').style.display = "none";
}

function showForgotEmailForm() {
    document.getElementById('registerForm').style.display = "none";
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('forgotPasswordForm').style.display = "none";
    document.getElementById('forgotEmailForm').style.display = "block";
}