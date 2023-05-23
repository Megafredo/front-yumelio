//& Imports SCSS
import './Assets/sass/index.scss';

//& Imports Modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { rentagenceApiSlice } from './Store/Api';


//! Important on dois spécifier l'API
import { ApiProvider } from '@reduxjs/toolkit/query/react';

//& Import Component
import { store } from './Store';
import { App } from './App/App';


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      {/* <ApiProvider api={rentagenceApiSlice}> */}
        <Provider store={store}>
          <App />
        </Provider>
      {/* </ApiProvider> */}
    </BrowserRouter>
  </StrictMode>
);
