import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter } from 'react-router-dom';
// import { createBrowserRouter } from 'react-router-dom';
import './styles/index.css';
import { routes } from './configs/routes';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createHashRouter(routes);
// const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);
