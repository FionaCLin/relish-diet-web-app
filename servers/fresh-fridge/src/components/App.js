import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MealPlanner from './MealPlanner';
import Login from './Login';
import Bookmark from './Bookmark';
import Dashboard from './Dashboard';
import RecipeList from './RecipeList';
import RecipePage from './RecipePage';
import NavigationBar from './NavigationBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" store={this.props.store}>
          <NavigationBar />
          <Route path="/login" component={Login} exact stric />
          <Route path="/" component={Login} exact stric />
          <Route path="/dashboard" exact strict component={Dashboard} />
          <Route path="/search" exact strict component={Dashboard} />
          <Route path="/mealplan" exact stric component={MealPlanner} />
          <Route path="/bookmark" exact stric component={Bookmark} />
          <Route path="/recipes" exact stric component={RecipeList} />
          <Route path="/recipe" component={RecipePage} />
        </div>
      </Router>
    );
  }
}

export default App;
