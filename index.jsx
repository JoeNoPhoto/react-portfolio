import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from 'routes';

require('style!css!foundation-sites/dist/foundation.min.css');

render(
  <Router history={browserHistory}>
    {routes}
  </Router>, document.getElementById('app')
);
