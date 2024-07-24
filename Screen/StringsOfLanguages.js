// StringsOfLanguages.js
import languageStrings from './languageStrings';

const StringsOfLanguages = {
  currentLanguage: 'en',
  setLanguage(shortform) {
    this.currentLanguage = shortform;
  },
  get(key) {
    return languageStrings[this.currentLanguage][key];
  },
};

export default StringsOfLanguages;