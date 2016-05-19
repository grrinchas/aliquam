"use strict";

window.addEventListener("load", function () {

    var menu = document.getElementById("menu");
    var nav = document.getElementsByTagName("nav")[0];

    menu.addEventListener("click", function (e) {
        e.stopPropagation();
        nav.classList.toggle("active");
    });
    document.addEventListener("click", function () {
        if (nav.classList.contains("active"))
            document.getElementsByTagName("nav")[0].classList.toggle("active");
    });
});