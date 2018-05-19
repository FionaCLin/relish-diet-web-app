import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Person name="max" age="4" />
          <Person name="mim" age="6" >my hobbiy is coding </Person>
          <Person name="average" age="5" />
        </p>
      </div>
    );
  }
}

export default App;
