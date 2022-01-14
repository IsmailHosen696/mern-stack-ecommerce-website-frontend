import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DashboardProvider from './contexts/DashboardProvider';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DashboardProvider>
        <App />
      </DashboardProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);