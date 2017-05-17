import React from 'react';
import ReactDOM from 'react-dom';
import {
  browserHistory,
  IndexRoute,
  Route,
  Router
  } from 'react-router';

// Routes
import About from './routes/About';
import App from './App';
import Bionic from './routes/Bionic';
import Portfolio from './routes/Portfolio';

import './styles/index.scss';

ReactDOM.render((
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path='/' component={App}>
      <IndexRoute component={Portfolio} />
      <Route path='/about' component={About} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/portfolio/bionic' component={Bionic} />
      {
        //<Route path='*' component={ErrorPage} />
      }
    </Route>
  </Router>),
  document.getElementById('root')
);
