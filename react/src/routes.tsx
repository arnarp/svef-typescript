import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import Shell from './app/Shell';
import Home from './app/Home';
import About from './app/About';
import Counter from './app/counter';
import Stars from './app/Stars';

export default (
  <Route path="/" component={Shell}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="counter" component={Counter} />
    <Route path="stars" component={Stars} />
  </Route>
);
