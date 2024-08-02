import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './my_project.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './state/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
)
