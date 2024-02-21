export const saveLanguage = (language: string) => {
    localStorage.setItem('language', language);
  }
  
  export const getLanguage = (): string | null => {
    return localStorage.getItem('language');
  }
  

  