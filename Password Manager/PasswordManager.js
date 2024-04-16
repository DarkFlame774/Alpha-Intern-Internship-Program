var passwordDatabase = [];
var loggedIn = false;

function checkSecurityCode() {
    var securityCode = document.getElementById("securityCode").value;
    if (securityCode === "777777") {
        loggedIn = true;
        document.getElementById("login").style.display = "none";
        document.getElementById("passwordForm").style.display = "block";
        document.getElementById("passwordStrength").style.display = "block";
        document.getElementById("passwordShow").style.display = "block";
    } else {
        alert("Incorrect security code. Please try again.");
    }
}

function savePassword() {
    if (!loggedIn) return;
    var websiteName = document.getElementById("websiteName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    passwordDatabase.push({ website: websiteName, username: username, password: password, email: email });
    clearFields();
}

function generateStrongPassword() {
    var length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    var password = "";
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    document.getElementById("password").value = password;
}

function showPasswords() {
    if (!loggedIn) return;
    var table = document.getElementById("passwordTable");
    table.innerHTML = "<tr><th>Website</th><th>Username</th><th>Password</th><th>Email</th></tr>";
    for (var i = 0; i < passwordDatabase.length; i++) {
        var row = table.insertRow();
        row.insertCell().textContent = passwordDatabase[i].website;
        row.insertCell().textContent = passwordDatabase[i].username;
        row.insertCell().textContent = passwordDatabase[i].password;
        row.insertCell().textContent = passwordDatabase[i].email;
    }
    document.getElementById("passwordList").style.display = "block";
}

function clearFields() {
    document.getElementById("websiteName").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
}

function logout() {
    loggedIn = false;
    passwordDatabase = [];
    document.getElementById("login").style.display = "block";
    document.getElementById("passwordForm").style.display = "none";
    document.getElementById("passwordStrength").style.display = "none";
    document.getElementById("passwordList").style.display = "none";
    document.getElementById("passwordShow").style.display = "none";
}
