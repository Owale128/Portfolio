
import { saveLanguage, getLanguage } from "./Functions/saveLanguage";

const swedishElements = document.querySelectorAll('.swedish');
const englishElements = document.querySelectorAll('.english');
const languageSelect = document.getElementById('language-select') as HTMLSelectElement;

languageSelect.addEventListener('change', () => {
    const selectedLanguage = languageSelect.value;
    saveLanguage(selectedLanguage);
    updateLanguage(selectedLanguage);
});

const updateLanguage = (language: string) => {
    if (language === 'en') {
        swedishElements.forEach(element => {
            element.classList.add('none');
        });
        englishElements.forEach(element => {
            element.classList.remove('none');
        });
    } else {
        englishElements.forEach(element => {
            element.classList.add('none');
        });
        swedishElements.forEach(element => {
            element.classList.remove('none');
        });
    }
};

const activateSavedLanguage = () => {
    const savedLanguage = getLanguage();
    if (savedLanguage) {
        updateLanguage(savedLanguage);
    }
};

window.onload = () => {
    activateSavedLanguage();
};
