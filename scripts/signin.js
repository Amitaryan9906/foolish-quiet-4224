import { navbar } from "../components/navbar.js";

let nav_div = document.getElementById("navbarRP");

nav_div.innerHTML = navbar()

import { footer } from "../components/footer.js";

let foot_div = document.getElementById("RPfootermain");

foot_div.innerHTML = footer();


// Signinpart start here
let users = JSON.parse(localStorage.getItem("signupData")) || [];
document.querySelector("form").addEventListener("submit", mySignIn);

function mySignIn(event) {
    event.preventDefault();
    let data = {
        userEmail: document.getElementById("emailRP").value,
        userPassword: document.getElementById("passwordRP").value,
    };

    if (checkSignin(data.userEmail, data.userPassword) == true) {
        localStorage.setItem("signinData", JSON.stringify(data));
        alert("sign in successful");
        window.location.href = "index.html";
    } else {
        alert("worng email or password");
    }

    function checkSignin(email, password) {
        let filter = users.filter(function(ele) {
            return ele.Email == email && ele.Password == password;
        });
        if (filter.length > 0) {
            return true;
        } else {
            return false;
        }
    }
}