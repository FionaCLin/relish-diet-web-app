import React, { Component } from 'react';
import './App.css';
import Login from './Login';



class RecipeImage extends Component {
  render() {
  
    return (
          
   <div className="RecipeImage">
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
      
          <h4>Recipe Images</h4>
          <br></br>
          <div class="form-group row">
            <label for="inputImage1" class="col-sm-2 col-form-label">Image 1</label>
            <div class="col-sm-10">
              <input type="file" class="form-control-file" id="inputImage1"></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputImage2" class="col-sm-2 col-form-label">Image 2</label>
            <div class="col-sm-10">
              <input type="file" class="form-control-file" id="inputImage2"></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputImage2" class="col-sm-2 col-form-label">Image 3</label>
            <div class="col-sm-10">
              <input type="file" class="form-control-file" id="inputImage3"></input>
            </div>
        
        <a href= "Backgroun.js"> click to go to login</a>
          </div>
       
       
       

        <script>
            includeHTML();
        </script>
      </body> 
      </div>
    );
    
    
}
}



export default RecipeImage;
