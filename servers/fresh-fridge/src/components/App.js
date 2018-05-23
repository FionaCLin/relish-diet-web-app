import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import PropsRoute from '../constants/routeConst';
import { recipeInfo, users, CURR_USER_ID } from '../constants/dummyData';
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
      recipes: recipeInfo,
      users: users
    }
  }

  render() {
    return (
      <Router>
        <div store={this.props.store}>
          <NavigationBar />
          <Route path="/login" exact stric component={Login} />
          <Route path="/" exact stric component={Login} exact stric />
          <PropsRoute path="/dashboard" exact strict component={Dashboard} recipeInfo={this.state.recipes}/>
          <Route path="/search" exact strict component={Dashboard} />
          <PropsRoute path="/mealplan" exact stric component={MealPlanner} recipeInfo={this.state.recipes}/>
          <Route path="/bookmark" exact stric component={Bookmark} />
          <Route path="/recipes" exact stric component={RecipeList} />
          <PropsRoute path="/recipe/:id" component={RecipePage} curr_user={CURR_USER_ID} recipeInfo={this.state.recipes}
              users={this.state.users} addBookmark={(users) => { this.setState({users}); console.log(this.state.users);}} addComment={(recipes) => this.setState({recipes})}/>
        </div>
      </Router>
    );
  }
}

export default App;
