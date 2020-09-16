import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { IConfig } from './config/interfaces';
import { Context } from './context/context';
import './stylesheets/index.css';

window.addEventListener('DOMContentLoaded', (event) => {
 window.parent.postMessage(JSON.stringify({ action: 'init' }), '*');
 window.removeEventListener('DOMContentLoaded', () => null);
});

window.addEventListener('message', (event) => {
 event.preventDefault();
 if (!event.data || (typeof event.data !== 'string')) return;
 const config: IConfig = JSON.parse(event.data);
 return render(
   <Context.Provider value={JSON.stringify(config)}>
     <App />
   </Context.Provider>,
   document.body
 );
});