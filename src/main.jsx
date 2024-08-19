// importing modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

// importing components
import App from './pages/app/App';

// importing styles
import '@mantine/core/styles.css';

// importing css
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>
);
