"use strict";

window.addEventListener("load", function () {

    var menu = document.getElementById("menu");
    var nav = document.getElementsByTagName("nav")[0];
    var wrapper = document.getElementById("wrapper");

    menu.addEventListener("click", function (e) {
        e.stopPropagation();
        nav.classList.add("active");
        wrapper.style.left = "-13rem";
    });
    document.addEventListener("click", function () {
        if (nav.classList.contains("active")) {
            wrapper.style.left = "0";
            nav.classList.remove("active");
        }
    });

});