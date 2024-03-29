import { saveLanguage, getLanguage } from "./src/Functions/saveLanguage";


const toggleLanguageSelect = document.getElementById('language-select') as HTMLSelectElement;
const swedishElements = document.querySelectorAll('.swedish');
const englishElements = document.querySelectorAll('.english');

toggleLanguageSelect.addEventListener('change', () => {
  const selectedLanguage = toggleLanguageSelect.value;

  saveLanguage(selectedLanguage);

  if (selectedLanguage === 'en') {
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
});

const activateSavedLanguage = () => {
  const savedLanguage = getLanguage();
  console.log(saveLanguage)
  if (savedLanguage) {

    if (savedLanguage === 'en') {
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
  }
}

window.onload = () => {
  activateSavedLanguage();
};
