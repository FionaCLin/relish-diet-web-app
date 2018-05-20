import React, { Component } from 'react';
import './App.css';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App" store={this.props.store}>
      <Login />      
      </div>
    );
  }
}

export default App;
