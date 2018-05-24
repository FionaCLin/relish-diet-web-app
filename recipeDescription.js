import React, { Component } from 'react';
import './App.css';
import Login from './Login';





class RecipeDescription extends Component {
  render() {
  function getSelectValue()
        {
            var selectedValue = document.getElementById("list").value;
            console.log(selectedValue);
        }
    return (
          
   <div className="RecipeDescription">
       <head>
        <title>Fresh Fridge</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <link rel="stylesheet" type="text/css" href="style.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="http://www.w3schools.com/lib/w3data.js"></script>
        <script src="misc.js"></script>
        </head>
    <body>
        <div w3-include-html="navigation.html"></div>
        <div class="recipe_container">
        <h4>New Recipe</h4>
        <br></br>
        <form>
          <div class="form-group row">
            <label for="inputTitle" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
              <input type="title" class="form-control" id="inputTitle" placeholder="Recipe title"></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputIngredients" class="col-sm-2 col-form-label">Ingredients</label>
            <div class="col-sm-10">
              <textarea type="comment" class="form-control" id="inputIngredients" rows="5" placeholder="Add ingredients..."></textarea>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputMethod" class="col-sm-2 col-form-label">Method</label>
            <div class="col-sm-10">
              <textarea type="comment" class="form-control" id="inputMethod" rows="5" placeholder="Add method..."></textarea>
            </div>
          </div>
        
    
          
          <hr></hr>
    
       
       </form>
        </div>

        <script>
            includeHTML();
        </script>
    </body>   
      </div>
    );
    
    
}
}



export default RecipeDescription;


