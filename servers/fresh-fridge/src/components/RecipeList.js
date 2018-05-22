import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import { url_img } from '../constants/globalFunctions';

const RecipeList = (props) => {
  return (
    <div className="body_container">
      <div style={{ width: "100%", float: "left" }}>
        <h3 style={{ float: "left" }}>My Recipes</h3>
        <button style={{ float: "right" }} type="button" onClick={(e) => props.addRecipeOnClick(e)} className="btn btn-success">Create Recipe</button>
      </div>
      <br />
      <div style={{ width: "100%", float: "left" }} className="list-group" >
        {props.recipesList.map((recipe) => {
          return (
            <a className="list-group-item list-group-item-action recipe_btn" key={recipe.id} style={{ cursor: "pointer" }}>
              <button type="button" onClick={(e) => props.delRecipeOnClick(e, recipe.id)} className="btn btn-danger btn-circle" style={{ float: "right", marginTop: "5px" }} data-toggle="modal" data-target="#myModal">
                <i className="glyphicon glyphicon-remove"></i>
              </button>
              <button onClick={(e) => props.editRecipeOnClick(e, recipe.id)} type="button" className="btn btn-success btn-circle" style={{ float: "right", marginTop: "5px", marginRight: "10px" }}><i className="glyphicon glyphicon-edit"></i></button>
              <img onClick={(e) => props.onRecipeClick(e, recipe.id)} src={"./images/" + recipe.image + ".jpg"} alt="Avatar" className="dash_img" style={{ marginLeft: "5px", width: "150px", height: "150px", float: "left" }} />
              <div className="recipe_btn_content" style={{ marginTop: "-15px" }}>
                <h4 onClick={(e) => props.onRecipeClick(e)} style={{ display: "inline" }}>{recipe.name}</h4> <span />
                <div style={{ display: "inline", fontSize: "14px" }}>by LondonFitness</div>
                <div onClick={(e) => props.onRecipeClick(e)} className="panel panel-default" style={{ marginTop: "10px" }}>
                  <table className="table table-bordered table-striped" style={{ textAlign: "center" }}>
                    <tbody><tr>
                      <td>Calories (???)</td>
                      <td>Carbohydrates (g)</td>
                      <td>Protein (g)</td>
                      <td>Fats (g)</td>
                    </tr>
                      <tr>
                        <td className="macro_col">{recipe.calories}</td>
                        <td className="macro_col">{recipe.cabs}</td>
                        <td className="macro_col">{recipe.protein}</td>
                        <td className="macro_col">{recipe.fats}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </a>
          );
        })}
      </div >
    </div >
  );
};


const mapStateToProps = (state) => {
  console.log('map state%%%%%%%%%%', state.recipeList)
  return {
    recipesList: state.recipeList[0].myrecipes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRecipeOnClick(e) {
      console.log('click add my recipe');
    },
    editRecipeOnClick(e, id) {
      console.log('click edit my recipe ', id);
    },
    delRecipeOnClick(e, id) {
      console.log('click delete my recipe', id);
    },
    onRecipeClick(e, id) {
      console.log('click my recipe');
      // dispatch({type: constants.SELECT_RECIPE, select_id: id});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
