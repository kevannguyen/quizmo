import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './routes/AppRouter.tsx'
import './assets/styles/app.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
