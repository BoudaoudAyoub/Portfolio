import i18next from 'i18next';
import EN from './en-US.json';
import FR from './fr-FR.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(initReactI18next)
       .use(LanguageDetector)
       .init(
        { 
          detection: {
            order: ['localStorage'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'],
          },
          fallbackLng: 'en',
          resources: {
            en: {
              translation: EN,
            },
            fr: {
              translation: FR,
            },
          },
        });

export default i18next;