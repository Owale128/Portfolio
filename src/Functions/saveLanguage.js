"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.getLanguage = exports.saveLanguage = void 0;
var saveLanguage = function (language) {
    localStorage.setItem('language', language);
};
const _saveLanguage = saveLanguage;
export { _saveLanguage as saveLanguage };
var getLanguage = function () {
    return localStorage.getItem('language');
};
const _getLanguage = getLanguage;
export { _getLanguage as getLanguage };
