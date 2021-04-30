import React from "react";
import { connect } from "react-redux";
import PropsRoute from "./constants/routeConst";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/login/container.js";
import Signup from "./components/Signup";
import Dashboard from "./components/dashboard/container.js";
import Profile from "./components/Profile";
import MealList from "./components/meallist/container.js";
import ProfileEdit from "./components/ProfileEdit";
import NavigationBar from "./components/navigaton-bar/container.js";
import "./App.css";
import RecipePage from "./components/recipe/RecipePage";
import PropTypes from "prop-types";

const App = ({ store }) => {
  return (
    <Router>
      <div store={store}>
        <Route path="/" component={NavigationBar} />
        <Route path="/login" exact strict component={Login} />
        <Route path="/signup" exact strict component={Signup} />
        <Route path="/" exact strict component={Login} />
        <PropsRoute path="/dashboard" exact strict component={Dashboard} />
        <PropsRoute path="/recipe/:id" component={RecipePage} />
        <PropsRoute path="/meallist" exact strict component={MealList} />

        {/* <PropsRoute path="/dashboard" exact strict component={Dashboard} recipeInfo={this.state.recipes}/>
              <Route path="/search" exact strict component={Dashboard} />
                  curr_user={CURR_USER_ID} deletePlan={(mealPlans) => this.setState({mealPlans})}/>
              <PropsRoute path="/mealplan/:mode" exact strict component={MealPlanner} recipeInfo={this.state.recipes}
                  users={this.state.users} curr_user={CURR_USER_ID} mealPlans={this.state.mealPlans} recipeInfo={this.state.recipes}
                  editPlan={(mealPlans) => this.setState({mealPlans})}/>
              <PropsRoute path="/mealplan/:mode/:id" exact strict component={MealPlanner} recipeInfo={this.state.recipes}
                  users={this.state.users} curr_user={CURR_USER_ID} mealPlans={this.state.mealPlans} recipeInfo={this.state.recipes}
                  editPlan={(mealPlans) => this.setState({mealPlans})}/>
              <PropsRoute path="/recipes" exact strict component={RecipeList} recipeInfo={this.state.recipes} list_type={constants.recipeList.RECIPE_LIST}
                  curr_user={CURR_USER_ID} editRecipes={(recipes) => this.setState({recipes})}/>
              <PropsRoute path="/recipes/:mode/:id" exact strict component={EditRecipe} recipeInfo={this.state.recipes} editRecipes={(recipes) => this.setState({recipes})}
                  ingredientList={ingredientList} curr_user={CURR_USER_ID}/>
              <PropsRoute path="/recipes/:mode" exact strict component={EditRecipe} recipeInfo={this.state.recipes} editRecipes={(recipes) => this.setState({recipes})}
                  ingredientList={ingredientList} curr_user={CURR_USER_ID}/>
              <PropsRoute path="/bookmark" exact strict component={RecipeList} recipeInfo={this.state.recipes} list_type={constants.recipeList.BOOKMARK_LIST}
                  curr_user={CURR_USER_ID} users={this.state.users} editBookmark={(users) => this.setState({users})} />
              <PropsRoute path="/recipe/:id" component={RecipePage} curr_user={CURR_USER_ID} recipeInfo={this.state.recipes}
                  users={this.state.users} addBookmark={(users) => this.setState({users})} addComment={(recipes) => this.setState({recipes})}/>*/}
        <PropsRoute path="/profile" exact strict component={Profile} />
        <PropsRoute path="/profile/edit" component={ProfileEdit} />
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return state;
};

App.propTypes = {
  store: PropTypes.object,
};
export default connect(mapStateToProps)(App);
