"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
import { saveLanguage, getLanguage } from "./src/Functions/saveLanguage";
var toggleLanguageSelect = document.getElementById('language-select');
var swedishElements = document.querySelectorAll('.swedish');
var englishElements = document.querySelectorAll('.english');
toggleLanguageSelect.addEventListener('change', function () {
    var selectedLanguage = toggleLanguageSelect.value;
    (0, saveLanguage)(selectedLanguage);
    if (selectedLanguage === 'en') {
        swedishElements.forEach(function (element) {
            element.classList.add('none');
        });
        englishElements.forEach(function (element) {
            element.classList.remove('none');
        });
    }
    else {
        englishElements.forEach(function (element) {
            element.classList.add('none');
        });
        swedishElements.forEach(function (element) {
            element.classList.remove('none');
        });
    }
});
var activateSavedLanguage = function () {
    var savedLanguage = (0, getLanguage)();
    console.log(saveLanguage);
    if (savedLanguage) {
        if (savedLanguage === 'en') {
            swedishElements.forEach(function (element) {
                element.classList.add('none');
            });
            englishElements.forEach(function (element) {
                element.classList.remove('none');
            });
        }
        else {
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
