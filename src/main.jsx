import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// Parallax scroll variable for CSS-only parallax
document.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--parallax-scroll', window.scrollY + 'px');
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
