import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './comp/Authentication/PrivateRoute.js';
import './App.css';

import Navigation from './comp/Navigation/Navigation.js';
import Home from './comp/Home.js';
import ListNav from './comp/ListNav/ListNav.js';
import Login from './comp/Authentication/Login.js';
import SignUp from './comp/Authentication/Signup.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Route exact path='/' component={Home} />
        <PrivateRoute exact path='/lists' component={ListNav} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </div>
    );
  }
}

export default App;
