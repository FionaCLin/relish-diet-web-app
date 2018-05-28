import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import RecipeDescription from './recipeDescription';
import RecipeImage from './recipeImage';
import RecipeIngredients from './recipeIngredients';



class App extends Component {
  render() {
  
    return ( <div>
            <RecipeDescription />
            <RecipeIngredients />
            <RecipeImage />
            </div>    
  );
}
}

export default App;
