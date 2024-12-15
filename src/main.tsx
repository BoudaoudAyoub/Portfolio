import './index.css'
import App from './App.tsx'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { SoftModeProvider } from './contexts/SoftMode/SoftModeContextProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { TooltipProvider } from '@radix-ui/react-tooltip'

createRoot(document.getElementById('__elm')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SoftModeProvider>
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </SoftModeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
