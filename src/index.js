import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
// import { Provider } from 'react-redux';
// import { store } from './store/store';

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App/>);