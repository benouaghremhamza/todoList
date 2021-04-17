import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from './theme';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
