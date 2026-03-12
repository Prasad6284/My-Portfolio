// selecting elements
var menuIcon = document.querySelector("#menu-icon");
var navLinks = document.querySelector(".nav-links");

menuIcon.onclick = function () {
    navLinks.classList.toggle("active");
};

window.onscroll = function () {
    navLinks.classList.remove("active");
};


// 3. simple form alert
var submitBtn = document.querySelector(".button");
var emailInput = document.querySelector(".input-box input");

submitBtn.onclick = function (e) {

    e.preventDefault();

    if (emailInput.value != "") {

        alert("Thank you! Message sent to " + emailInput.value);
        emailInput.value = "";

    } 
    else {

        alert("Please enter your email");

    }

};