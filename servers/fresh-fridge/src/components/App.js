import React, { Component } from 'react';
import './App.css';
import MealPlanner from './MealPlanner';

class App extends Component {
  render() {
    return (
      <div className="App" store={this.props.store}>
      <MealPlanner />      
      </div>
    );
  }
}

export default App;
