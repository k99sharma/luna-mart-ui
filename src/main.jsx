// importing modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// importing components
import App from './pages/app/App';

// importing css
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
