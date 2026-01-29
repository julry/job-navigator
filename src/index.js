import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import './styles/index.css';
import { routes } from './configs/routes';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(routes, {basename: 'job-navigator/build'});

root.render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);
