import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { themeColors } from 'constants/constants';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themeColors}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
