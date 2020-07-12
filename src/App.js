import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Logo from './components/Logo';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/logo" component={Logo}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
