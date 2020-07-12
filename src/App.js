import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';

import './style/app.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <div class="content">
          <Route path="/" component={Home} exact/>
        </div>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
