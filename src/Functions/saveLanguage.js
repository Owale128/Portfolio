"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguage = exports.saveLanguage = void 0;
var saveLanguage = function (language) {
    localStorage.setItem('language', language);
};
exports.saveLanguage = saveLanguage;
var getLanguage = function () {
    return localStorage.getItem('language');
};
exports.getLanguage = getLanguage;
