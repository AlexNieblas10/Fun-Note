import { BrowserRouter, Route, Routes } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { GuessNote } from './views/GuessNote'
import './index.css'
import { GlobalProvider } from './context/GlobalProvider'
import { GuessNoteProvider } from './context/GuessNoteProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />

          <Route
            path="guessNote"
            element={
              <GuessNoteProvider>
                <GuessNote />
              </GuessNoteProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  </StrictMode>
)
