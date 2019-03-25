import React, { Component } from 'react';

import './App.css';

import Navigation from './comp/Navigation/Navigation.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>APP</h1>
      </div>
    );
  }
}

export default App;
