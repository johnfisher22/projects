
let generatedPass = "";

function generatePassword() {

    generatedPass = Math.floor(10000 + Math.random() * 90000).toString();

    document.getElementById("generatedPassword").innerText = generatedPass;
}

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const fullname = document.getElementById("fullname").value;

            const password = document.getElementById("password").value;

            if (password === generatedPass) {

                localStorage.setItem("visitorName", fullname);

                window.location.href = "about.html";

            } else {

                alert("Incorrect generated password!");

            }

        });
    }

    const welcomeText = document.getElementById("welcomeText");

    if (welcomeText) {

        const visitorName = localStorage.getItem("visitorName");

        welcomeText.innerHTML =
            `Welcome ${visitorName}! `;
    }

});


