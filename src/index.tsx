import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DashboardProvider from './contexts/DashboardProvider';

ReactDOM.render(
  <React.StrictMode>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </React.StrictMode>,
  document.getElementById('root')
);