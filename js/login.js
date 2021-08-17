document.getElementById("login-submit").addEventListener("click", function () {
    const userEmail = document.getElementById("user-email").value;
    const userPassword = document.getElementById("user-password").value;
    if (userEmail == "yourname@gmail.com" && userPassword == "myMoney") {
        window.location.href = "balance.html";
    }
})