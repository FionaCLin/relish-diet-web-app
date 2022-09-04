import React from 'react';
import {connect} from 'react-redux';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Login from './pages/login/container.js';
import Signup from './pages/Signup';
import Dashboard from './pages/dashboard/container.js';
import Profile from './pages/profile/container.js';
import ProfileEdit from './pages/ProfileEdit';
import NavigationBar from './pages/navigation-bar/container.js';
import './App.css';

import BookMarks from './pages/book-mark/container.js';
import EditRecipe from './pages/edit-recipe/container.js';
import RecipePage from './pages/recipe/container.js';
import RecipePageOld from './pages/RecipePage';
import RecipeList from './pages/recipe-list/container.js';

import EditMealPlanner from './pages/edit-meal-plan/container.js';
import MealPlanner from './pages/meal-plan/container.js';
import MealList from './pages/meal-list/container.js';

import PropTypes from 'prop-types';

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import config from './config';

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  oauth: {
    scope: [
      'phone',
      'email',
      'profile',
      'openid',
      'aws.cognito.signin.user.admin'
    ],
    redirectSignIn: 'http://localhost:3000/dashboard',
    redirectSignOut: 'http://localhost:3000/',
    clientId: '1g0nnr4h99a3sd0vfs9',
    responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
  }
});

const App = ({store, user, signOut}) => {
  return (
    <Router>
      <div store={store}>
        <NavigationBar signOut={signOut} cognitoUser={user} />

        <Routes>
          <Route path='/login' exact strict element={<Login />} />
          <Route path='/signup' exact strict element={<Signup />} />
          <Route path='/' exact strict element={<Login />} />
          <Route path='/dashboard' exact strict element={<Dashboard />} />

          <Route path='/recipes' exact strict element={<RecipeList />} />
          <Route
            path='/recipe-old/:id'
            element={<RecipePageOld />}
          />
          <Route path='/recipe/:id' element={<RecipePage />} />
          <Route path='/recipe/edit/:id' exact strict element={<EditRecipe />} />
          <Route path='/recipe' exact strict element={<EditRecipe />} />

          <Route path='/meal-plans' exact strict element={<MealList />} />
          <Route path='/meal-plan/:id' exact strict element={<MealPlanner />} />
          <Route path='/meal-plan/edit/:id' exact strict element={<EditMealPlanner />} />
          <Route path='/meal-plan' exact strict element={<EditMealPlanner />} />

          <Route path='/bookmark' exact strict element={<BookMarks />} />
          <Route path='/profile' exact strict element={<Profile />} />
          <Route path='/profile/edit' element={<ProfileEdit />} />
        </Routes>
        {/* 
                   <Route path="/search" exact strict component={Dashboard} />
                  curr_user={CURR_USER_ID} deletePlan={(mealPlans) => this.setState({mealPlans})}/>
              <PropsRoute path="/mealplan/:mode" exact strict component={MealPlanner} recipeInfo={this.state.recipes}
                  users={this.state.users} curr_user={CURR_USER_ID} mealPlans={this.state.mealPlans} recipeInfo={this.state.recipes}
                  editPlan={(mealPlans) => this.setState({mealPlans})}/>
              <PropsRoute path="/mealplan/:mode/:id" exact strict component={MealPlanner} recipeInfo={this.state.recipes}
                  users={this.state.users} curr_user={CURR_USER_ID} mealPlans={this.state.mealPlans} recipeInfo={this.state.recipes}
                  editPlan={(mealPlans) => this.setState({mealPlans})}/>
          */}
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
// export default withAuthenticator(App);

export default connect(mapStateToProps)(withAuthenticator(App));
