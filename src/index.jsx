import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import WebSiteRoutes from './routes';
import theme from './theme';
import './styles/global.css';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <WebSiteRoutes />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
