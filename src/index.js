import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { OrdersContextProvider } from './component/Store/order-context';



ReactDOM.render(
  <OrdersContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </OrdersContextProvider>,
  document.getElementById('root')
);


