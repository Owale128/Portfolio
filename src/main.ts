const toggleLanguageSelect = document.getElementById('language-select') as HTMLSelectElement;
  const swedishElements = document.querySelectorAll('.swedish');
  const englishElements = document.querySelectorAll('.english');

  toggleLanguageSelect.addEventListener('change', () => {
    const selectedLanguage = toggleLanguageSelect.value;
    
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