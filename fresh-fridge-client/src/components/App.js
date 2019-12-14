import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import PropsRoute from '../constants/routeConst';
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
      user: null
    };
  }

  render () {
    return (
      <Router>
        <div store={this.props.store}>
          <NavigationBar user={this.state.user} setUser={(user) => this.setState({user})} />
          <PropsRoute path='/login' exact strict component={Login} history={history} setUser={(user) => this.setState({user})} />
          <PropsRoute path='/' exact strict component={Login} setUser={(user) => this.setState({user})} />
          <PropsRoute path='/dashboard' exact strict component={Dashboard} user={this.state.user} />
          <PropsRoute path='/meallist' exact strict component={MealList} user={this.state.user} />
          <PropsRoute path='/:userID/mealplan/:mode' exact strict component={MealPlanner} user={this.state.user} />
          <PropsRoute path='/:userID/mealplan/:mode/:id' exact strict component={MealPlanner} user={this.state.user} />
          <PropsRoute path='/recipes' exact strict component={RecipeList} user={this.state.user} />
          <PropsRoute path='/recipes/:mode/:id' exact strict component={EditRecipe} user={this.state.user} />
          <PropsRoute path='/recipes/:mode' exact strict component={EditRecipe} user={this.state.user} />
          <PropsRoute path='/bookmark' exact strict component={RecipeList} list_type={constants.recipeList.BOOKMARK_LIST} user={this.state.user} />
          <PropsRoute path='/recipe/:id' component={RecipePage} user={this.state.user} />
          <PropsRoute path='/profile' component={Profile} user={this.state.user} setUser={(user) => this.setState({user})} />
          <PropsRoute path='/search' exact strict component={Search} user={this.state.user} />
          <PropsRoute path='/search/name/:name' exact strict component={Search} user={this.state.user} />
        </div>
      </Router>
    );
  }
}

export default App;
