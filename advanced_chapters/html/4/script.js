function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessageElement = document.getElementById("error-message");

    // Simple authentication logic (replace with your own authentication logic)
    if (username === "admin" && password === "password") {
        // Successful login
        errorMessageElement.textContent = "";
        alert("Hidden Scripture: CTF{04EFAF080F5A3E74E1C29D1CA6A48569382CBBCD324E8D59D2B83EF21C039F00}");
    } else {
        // Failed login
        errorMessageElement.textContent = "Invalid username or password";
    }
}
