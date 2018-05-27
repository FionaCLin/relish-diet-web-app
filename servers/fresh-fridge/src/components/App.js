import React, { Component } from 'react';
import './App.css';
import './misc.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import PropsRoute from '../constants/routeConst';
import { recipeInfo, users, mealPlans, ingredientList, CURR_USER_ID } from '../constants/dummyData';
import constants from '../constants';
import MealPlanner from './MealPlanner';
import Login from './Login';
import Bookmark from './Bookmark';
import Dashboard from './Dashboard';
import RecipeList from './RecipeList';
import RecipePage from './RecipePage';
import NavigationBar from './NavigationBar';
import MealList from './MealList';
import EditRecipe from './EditRecipe';
import Profile from './Profile';
import Search from './Search';
import { createHashHistory } from 'history';

const history = createHashHistory();

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      recipes: recipeInfo,
      users,
      mealPlans,
      user: null
    };
  }

  render () {
    return (
      <Router>
        <div store={this.props.store}>
          <NavigationBar />
          <PropsRoute path='/login' exact strict component={Login} history={history} setUser={(user) => this.setState({user})} />
          <PropsRoute path='/' exact strict component={Login} setUser={(user) => this.setState({user})} />
          <PropsRoute path='/dashboard' exact strict component={Dashboard} recipeInfo={this.state.recipes} user={this.state.user} />
          <PropsRoute path='/meallist' exact strict component={MealList} mealPlans={this.state.mealPlans}
            curr_user={CURR_USER_ID} deletePlan={(mealPlans) => this.setState({mealPlans})} />
          <PropsRoute path='/mealplan/:mode' exact strict component={MealPlanner} recipeInfo={this.state.recipes}
            users={this.state.users} curr_user={CURR_USER_ID} mealPlans={this.state.mealPlans}
            editPlan={(mealPlans) => this.setState({mealPlans})} />
          <PropsRoute path='/mealplan/:mode/:id' exact strict component={MealPlanner} recipeInfo={this.state.recipes}
            users={this.state.users} curr_user={CURR_USER_ID} mealPlans={this.state.mealPlans}
            editPlan={(mealPlans) => this.setState({mealPlans})} />
          <PropsRoute path='/recipes' exact strict component={RecipeList} recipeInfo={this.state.recipes} list_type={constants.recipeList.RECIPE_LIST}
            curr_user={CURR_USER_ID} editRecipes={(recipes) => this.setState({recipes})} user={this.state.user} />
          <PropsRoute path='/recipes/:mode/:id' exact strict component={EditRecipe} recipeInfo={this.state.recipes} editRecipes={(recipes) => this.setState({recipes})}
            ingredientList={ingredientList} curr_user={CURR_USER_ID} />
          <PropsRoute path='/recipes/:mode' exact strict component={EditRecipe} recipeInfo={this.state.recipes} editRecipes={(recipes) => this.setState({recipes})}
            ingredientList={ingredientList} curr_user={CURR_USER_ID} />
          <PropsRoute path='/bookmark' exact strict component={RecipeList} recipeInfo={this.state.recipes} list_type={constants.recipeList.BOOKMARK_LIST}
            curr_user={CURR_USER_ID} users={this.state.users} editBookmark={(users) => this.setState({users})} user={this.state.user} />
          <PropsRoute path='/recipe/:id' component={RecipePage} user={this.state.user} curr_user={CURR_USER_ID} recipeInfo={this.state.recipes}
            users={this.state.users} addBookmark={(users) => this.setState({users})} addComment={(recipes) => this.setState({recipes})} />
          <PropsRoute path='/profile' component={Profile} changeUsers={(users) => this.setState({users})} curr_user={CURR_USER_ID} users={this.state.users} />
          <PropsRoute path='/search' exact strict component={Search} users={this.state.users} recipeInfo={this.state.recipes} />
          <PropsRoute path='/search/name/:name' exact strict component={Search} users={this.state.users} recipeInfo={this.state.recipes} />
          <PropsRoute path='/search/macros/:macros' exact strict component={Search} users={this.state.users} recipeInfo={this.state.recipes} />
        </div>
      </Router>
    );
  }
}

export default App;
