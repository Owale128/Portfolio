"use strict";

// Object.defineProperty(exports, "__esModule", { value: true });
// const _getLanguage = exports.saveLanguage = void 0;
// export { _getLanguage as getLanguage };
var saveLanguage = function (language) {
    localStorage.setItem('language', language);
};
const _saveLanguage = saveLanguage;
export { _saveLanguage as saveLanguage };
var getLanguage = function () {
    return localStorage.getItem('language');
};

