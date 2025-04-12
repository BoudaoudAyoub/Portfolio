import './index.css'
import React from 'react';
import App from './App.tsx'
import i18n from './locales/i18n.tsx';
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next';
import { HashRouter } from 'react-router-dom';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { SoftModeProvider } from './contexts/SoftMode/SoftModeContextProvider.tsx';

createRoot(document.getElementById('__elm')!).render(
  <React.StrictMode>
    <HashRouter>
      <I18nextProvider i18n={i18n}>
        <SoftModeProvider>
          <TooltipProvider>
            <App />
          </TooltipProvider>
        </SoftModeProvider>
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>
)
