email = document.getElementById("js-email-input");

form = document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e);
    if (document.getElementById("js-password-input").value.length < 10) {
        document.getElementById('passwordHelp').innerText = "you password needs to be 10 characters or longer."
    } else {
        document.getElementById('passwordHelp').innerText = ""

    }
    if (document.getElementById("firstName").value == "") {
        document.querySelector("#firstNameHelp").innerText = "you have to fill-in your first name."
    } else {
        document.querySelector("#firstNameHelp").innerText = ""

    }
    if (document.getElementById("lastName").value == "") {
        document.querySelector("#lastNameHelp").innerText = "you have to fill-in your last name."
    } else {
        document.querySelector("#lastNameHelp").innerText = ""

    }
    if (document.getElementById("js-password-input").value.length >= 10 && document.getElementById("firstName").value != "" && document.getElementById("lastName").value != "") {
        e.target.setAttribute('hidden', '');
        document.querySelector("h1").removeAttribute('hidden')
    }
});