import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SoftModeProvider } from './contexts/SoftMode/SoftModeContextProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { TooltipProvider } from '@radix-ui/react-tooltip'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SoftModeProvider>
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </SoftModeProvider>
    </BrowserRouter>
  </StrictMode>
)
