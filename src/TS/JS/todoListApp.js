"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var saveLanguage_1 = require("../../Functions/saveLanguage");
var swedishElements = document.querySelectorAll('.swedish');
var englishElements = document.querySelectorAll('.english');
var languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', function () {
    var selectedLanguage = languageSelect.value;
    (0, saveLanguage_1.saveLanguage)(selectedLanguage);
    updateLanguage(selectedLanguage);
});
var updateLanguage = function (language) {
    if (language === 'en') {
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
};
var activateSavedLanguage = function () {
    var savedLanguage = (0, saveLanguage_1.getLanguage)();
    if (savedLanguage) {
        updateLanguage(savedLanguage);
    }
};
window.onload = function () {
    activateSavedLanguage();
};
