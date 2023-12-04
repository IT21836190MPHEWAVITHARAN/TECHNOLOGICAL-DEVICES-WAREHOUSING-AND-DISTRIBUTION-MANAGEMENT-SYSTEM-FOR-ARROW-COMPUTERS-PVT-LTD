import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import'boostrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './Orderredux/store';
import { AppProvider } from './Ordercomponents/context/AppCotext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
    </AppProvider>
    </Provider>
   
  </React.StrictMode>
);


