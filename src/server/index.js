import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../shared/components/App';

const app = Express();
const port = 3000;
const requestHandler = (req, res) => {
  const AppString = renderToString(
    <App />
  );
  const pageString = 
    `
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>React Universal</title>
    </head>
    <body>
      <div id="root">${AppString}</div>
      <script src="./js/bundle.js"></script>
    </body>
    </html>
    `;

  res.send(pageString);
};

app.use(Express.static('static'));
app.use(requestHandler);
app.listen(port);
