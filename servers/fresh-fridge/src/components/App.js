import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import PropsRoute from '../constants/routeConst';
import recipeInfo from '../constants/dummyData';
import MealPlanner from './MealPlanner';
import Login from './Login';
import Bookmark from './Bookmark';
import Dashboard from './Dashboard';
import RecipeList from './RecipeList';
import RecipePage from './RecipePage';
import NavigationBar from './NavigationBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: recipeInfo
    }
  }

  render() {
    return (
      <Router>
        <div className="App" store={this.props.store}>
          <NavigationBar />
          <Route path="/login" exact stric component={Login} />
          <Route path="/" exact stric component={Login} exact stric />
          <Route path="/dashboard" exact strict component={Dashboard} />
          <Route path="/search" exact strict component={Dashboard} />
          <PropsRoute path="/mealplan" exact stric component={MealPlanner} recipeInfo={this.state.recipes}/>
          <Route path="/bookmark" exact stric component={Bookmark} />
          <Route path="/recipes" exact stric component={RecipeList} />
          <Route path="/recipe" component={RecipePage} />
        </div>
      </Router>
    );
  }
}

export default App;
