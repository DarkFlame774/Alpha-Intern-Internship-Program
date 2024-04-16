let loginPassword = "777777";
let savedPasswords = [];

function login() {
    let securityCode = document.getElementById("securityCode").value;
    if (securityCode === loginPassword) {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("passwordSection").style.display = "block";
        document.getElementById("passwordList").style.display = "block";
    } else {
        alert("Incorrect security code. Please try again.");
    }
}

function savePassword() {
    let websiteName = document.getElementById("websiteName").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    savedPasswords.push({ websiteName, username, password, email });

    clearFields();
}

function clearFields() {
    document.getElementById("websiteName").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
}

function showPasswords() {
    let inputPassword = prompt("Enter your login password:");
    if (inputPassword === loginPassword) {
        let passwordListItems = document.getElementById("passwordListItems");
        passwordListItems.innerHTML = "";
        savedPasswords.forEach(password => {
            let listItem = document.createElement("li");
            listItem.textContent = Website: ${ password.websiteName }, Username: ${ password.username }, Password: ${ password.password };
            passwordListItems.appendChild(listItem);
        });
    } else {
        alert("Incorrect password. Please try again.");
    }
}