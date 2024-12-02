import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SoftModeProvider } from './contexts/SoftMode/SoftModeContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SoftModeProvider>
      <App />
    </SoftModeProvider>
  </StrictMode>
)
