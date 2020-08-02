/** @format */

import React, {Fragment, Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';

import Login from './views/Login/Index';

class App extends Component {
  state = {};
  // switch 只匹配一个
  // exact 精准匹配
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route component={Login} exact path='/' />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
export default App;
