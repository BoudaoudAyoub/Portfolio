import i18next from 'i18next';
import EN from './en-US.json';
import FR from './fr-FR.json';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next)
       .init(
        {  
          lng: 'en',
          debug: true,
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