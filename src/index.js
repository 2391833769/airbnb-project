import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import React, { StrictMode, Suspense, } from 'react';


import store from './store';
import { theme } from './assets/theme';
import App from '@/App';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Suspense fallback="Loading">
              <App/>
            </Suspense>
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </StrictMode>
);