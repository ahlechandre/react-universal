import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/components/App'; 

const preloaded = window.__PRELOADED_DATA__;

delete window.__PRELOADED_DATA__;

hydrate(
  <App data={preloaded} />,
  document.querySelector('#root')
);