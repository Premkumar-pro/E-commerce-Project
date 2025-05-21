// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import ShopContextProvider from './Context/ShopContext';
// import { Route } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//   <ShopContextProvider>
//     <App />
//   </ShopContextProvider>

// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { ShopContextProvider } from './Context/ShopContext'; // make sure path is correct

// ReactDOM.render(
//   <React.StrictMode>
//     <ShopContextProvider>
//       <App />
//     </ShopContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// src/index.js or src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShopContextProvider } from './Context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);