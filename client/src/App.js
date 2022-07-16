import React from "react";
import { connect } from "react-redux";
import PropsRoute from "./constants/routeConst";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/login/container.js";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard/container.js";
import Profile from "./pages/profile/container.js";
import MealList from "./pages/meal-list/container.js";
import ProfileEdit from "./pages/ProfileEdit";
import NavigationBar from "./pages/navigation-bar/container.js";
import "./App.css";
import RecipePage from "./pages/recipe/container.js";
import RecipeList from "./pages/recipe-list/container.js";
import BookMarks from "./pages/book-mark/container.js";
import EditRecipe from "./pages/edit-recipe/container.js";
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
        <PropsRoute path="/recipes" exact strict component={RecipeList}/>
        <PropsRoute path="/recipe/:id" component={RecipePage} />
        <PropsRoute path="/recipes/:mode/:id" exact strict component={EditRecipe} />
        <PropsRoute path="/recipes/:mode" exact strict component={EditRecipe} />

        <PropsRoute path="/meal-list" exact strict component={MealList} />
        <PropsRoute path="/bookmark" exact strict component={BookMarks} />

        {/* 
              <PropsRoute path="/dashboard" exact strict component={Dashboard} recipeInfo={this.state.recipes}/>
                   <Route path="/search" exact strict component={Dashboard} />
                  curr_user={CURR_USER_ID} deletePlan={(mealPlans) => this.setState({mealPlans})}/>
              <PropsRoute path="/mealplan/:mode" exact strict component={MealPlanner} recipeInfo={this.state.recipes}
                  users={this.state.users} curr_user={CURR_USER_ID} mealPlans={this.state.mealPlans} recipeInfo={this.state.recipes}
                  editPlan={(mealPlans) => this.setState({mealPlans})}/>
              <PropsRoute path="/mealplan/:mode/:id" exact strict component={MealPlanner} recipeInfo={this.state.recipes}
                  users={this.state.users} curr_user={CURR_USER_ID} mealPlans={this.state.mealPlans} recipeInfo={this.state.recipes}
                  editPlan={(mealPlans) => this.setState({mealPlans})}/>
          */}
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
