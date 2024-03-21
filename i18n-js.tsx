import i18n from 'i18n-js';
import * as Localization from 'react-native-localize';
import en from './locales/en.json';
import ar from './locales/ar.json';

// Define translations
i18n.translations = {
  en,
  ar,
};

// Set fallback if translation key is missing
i18n.fallbacks = true;

// Detect device language and set it as the default language
const { languageTag } = Localization;
i18n.locale = languageTag;

export default i18n;