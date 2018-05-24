import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import PropsRoute from '../constants/routeConst';
import { recipeInfo, users, mealPlans, CURR_USER_ID } from '../constants/dummyData';
import constants from '../constants';
import MealPlanner from './MealPlanner';
import Login from './Login';
import Bookmark from './Bookmark';
import Dashboard from './Dashboard';
import RecipeList from './RecipeList';
import RecipePage from './RecipePage';
import NavigationBar from './NavigationBar';
import MealList from './MealList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: recipeInfo,
      users,
      mealPlans
    }
  }

  render() {
    return (
      <Router>
        <div store={this.props.store}>
          <NavigationBar />
          <Route path="/login" exact strict component={Login} />
          <Route path="/" exact strict component={Login}/>
          <PropsRoute path="/dashboard" exact strict component={Dashboard} recipeInfo={this.state.recipes}/>
          <Route path="/search" exact strict component={Dashboard} />
          <PropsRoute path="/meallist" exact strict component={MealList} mealPlans={this.state.mealPlans} deletePlan={(mealPlans) => this.setState({mealPlans})}/>
          <PropsRoute path="/mealplan" exact strict component={MealPlanner} recipeInfo={this.state.recipes}/>
          <PropsRoute path="/recipes" exact strict component={RecipeList} recipeInfo={this.state.recipes} list_type={constants.recipeList.RECIPE_LIST}
              curr_user={CURR_USER_ID} editRecipes={(recipes) => this.setState({recipes})}/>
          <PropsRoute path="/bookmark" exact strict component={RecipeList} recipeInfo={this.state.recipes} list_type={constants.recipeList.BOOKMARK_LIST}
              curr_user={CURR_USER_ID} users={this.state.users} editBookmark={(users) => this.setState({users})} />
          <PropsRoute path="/recipe/:id" component={RecipePage} curr_user={CURR_USER_ID} recipeInfo={this.state.recipes}
              users={this.state.users} addBookmark={(users) => this.setState({users})} addComment={(recipes) => this.setState({recipes})}/>
        </div>
      </Router>
    );
  }
}

export default App;
