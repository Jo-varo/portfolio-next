export const getLanguage = (language:string) => {
  const userLang = language.split('-')[0];
  return userLang === 'es' ? 'es' : 'en';
};
