"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
import { saveLanguage, getLanguage } from "./src/Functions/saveLanguage.js";

var toggleLanguageSelect = document.getElementById('language-select');
var swedishElements = document.querySelectorAll('.swedish');
var englishElements = document.querySelectorAll('.english');

toggleLanguageSelect.addEventListener('change', function () {
    var selectedLanguage = toggleLanguageSelect.value;
    saveLanguage(selectedLanguage);
    if (selectedLanguage === 'en') {
        swedishElements.forEach(function (element) {
            element.classList.add('none');
        });
        englishElements.forEach(function (element) {
            element.classList.remove('none');
        });
    } else {
        englishElements.forEach(function (element) {
            element.classList.add('none');
        });
        swedishElements.forEach(function (element) {
            element.classList.remove('none');
        });
    }
});

var activateSavedLanguage = function () {
    var savedLanguage = getLanguage();
    console.log(savedLanguage);
    if (savedLanguage) {
        if (savedLanguage === 'en') {
            swedishElements.forEach(function (element) {
                element.classList.add('none');
            });
            englishElements.forEach(function (element) {
                element.classList.remove('none');
            });
        } else {
            englishElements.forEach(function (element) {
                element.classList.add('none');
            });
            swedishElements.forEach(function (element) {
                element.classList.remove('none');
            });
        }
    }
};

window.onload = function () {
    activateSavedLanguage();
};


document.addEventListener('DOMContentLoaded', function () {
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navbarLinks.forEach(function (navbarLink) {
        navbarLink.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = navbarLink.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
