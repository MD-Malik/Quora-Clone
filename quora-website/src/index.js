import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { StyledEngineProvider } from "@mui/material/styles";

ReactDOM.render(
  <React.StrictMode>
     <StyledEngineProvider injectFirst>
     <BrowserRouter>
      <Provider store={store}>
       <App />
       </Provider>
     </BrowserRouter>
     </StyledEngineProvider>
    </React.StrictMode>,
  document.getElementById('root')
);