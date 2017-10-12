import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../shared/components/App';
import fetchData from '../shared/api/fetchData';

const app = Express();
const port = 3000;
const renderPage = (req, res, preloaded) => {
  const AppString = renderToString(
    <App data={preloaded} />
  );
  const pageString = 
    `
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>React Universal</title>
      <style>body { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; }</style>
    </head>
    <body>
      <div id="root">${AppString}</div>
      <script>window.__PRELOADED_DATA__ = ${JSON.stringify(preloaded)};</script>
      <script src="./js/bundle.js"></script>
    </body>
    </html>
    `;

  res.send(pageString);  
};
const requestHandler = (req, res) => {
  fetchData(data => renderPage(req, res, data));
};

app.use(Express.static('static'));
app.use(requestHandler);
app.listen(port);
