const express = require('express');
const path = require('path');
const compression = require('compression');

import React from 'react';
// use this to render our app to an html string
import { renderToString } from 'react-dom/server';
// and these to matcht the url to routes and then render
import { match, RouterContext } from 'react-router';
import routes from './modules/routes';

const app = express();

app.use(compression());
// serve the static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

function renderPage(appHtml) {
  return `
    <html>
    <head>
    <meta charset="UTF-8" />
    <title>React Router App</title>
    <link rel="stylesheet" href="/index.css" />
    <div id="app">${appHtml}</div>
    <script src='bundle.js'></script>
  `;
}

// send all requests to index.html so browserHistory in React Router works
app.get('*', (req, res) => {
  // match the routes to the url
  match({ routes }, { location: req.url }, (err, redirect, props) => {
    // `RouterContext` is the what `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to--
    // get these props before rendering.
    const appHtml = renderToString(<RouterContext {...props} />);

    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
    res.send(renderPage(appHtml));
  });
});


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Production Express server funning at localhost + ${PORT}`);
});
