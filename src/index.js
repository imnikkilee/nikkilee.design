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
import Beatport from './routes/Beatport';
import Bionic from './routes/Bionic';
import Jukely from './routes/Jukely';
import Portfolio from './routes/Portfolio';
import TheGroundwork from './routes/TheGroundwork';

import './styles/index.scss';

ReactDOM.render((
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path='/' component={App}>
      <IndexRoute component={Portfolio} />
      <Route path='/about' component={About} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/portfolio/bionic' component={Bionic} />
      <Route path='/portfolio/jukely' component={Jukely} />
      <Route path='/portfolio/beatport' component={Beatport} />
      <Route path='/portfolio/thegroundwork' component={TheGroundwork} />
      {
        //<Route path='*' component={ErrorPage} />
      }
    </Route>
  </Router>),
  document.getElementById('root')
);
