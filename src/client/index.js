import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/components/App'; 

hydrate(
  <App />,
  document.querySelector('#root')
);