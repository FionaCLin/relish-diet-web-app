import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import { isUndefined } from 'util';
import Link from 'react-router-dom/Link';
import { isNull } from 'util';
import api from '../api.js';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      modalRecipe: {
        id: 0,
        name: ''
      }
    }
  }

  componentWillMount() {
    const receiveList = (recipes) => this.setState({ recipes });
    if (this.props.list_type == constants.recipeList.BOOKMARK_LIST) {
      api.getBookmarks(this.props.user.id, receiveList);
    } else {
      api.getPersonal(this.props.user.id, receiveList);
    }
  }

  deleteRecipe = (e, recipeId) => {
    e.preventDefault();
    if (this.props.list_type === constants.recipeList.BOOKMARK_LIST) {
      api.deleteBookmark(this.props.user.id, recipeId);
      recipeId = this.state.modalRecipe.id;
    } else {
      api.deleteRecipe(recipeId);
    }
    let { recipes } = this.state;
    recipes.splice(recipes.indexOf(recipes.find(x => x.id == recipeId)), 1);
    this.setState({recipes});
  }

  changeModal = (e, recipe) => {
    e.preventDefault();
    let { modalRecipe } = this.state;
    modalRecipe = recipe;
    this.setState({modalRecipe});
  }

  render() {
    let list_type = this.props.list_type;
    let { recipes } = this.state;
      return (
      <div className="body_container">
      {/* {<!-- Modal -->} */}
            <div id="myModal" class="modal fade" role="dialog">
              <div class="modal-dialog">

                {/* <!-- Modal content--> */}
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Remove Recipe</h4>
                  </div>
                  <div>
                    <div class="modal-body">
                      <p>Delete '{this.state.modalRecipe.name}' from {(list_type == constants.recipeList.BOOKMARK_LIST) ? "bookmarked recipes": "my recipes"}?</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                      <button type="button" onClick={(e) => (list_type == constants.recipeList.BOOKMARK_LIST) ? this.deleteRecipe(e, e.target.id) : this.deleteRecipe(e, this.state.modalRecipe.id)}
                        class="btn btn-danger" data-dismiss="modal">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div style={{ width: "100%", float: "left" }}>
          <h3 style={{ float: "left" }}>{(list_type == constants.recipeList.BOOKMARK_LIST) ? "Bookmarked Recipes": "My Recipes"}</h3>
          { (list_type !== constants.recipeList.BOOKMARK_LIST) ?
            <Link to="recipes/add"><button style={{ float: "right" }} type="button" className="btn btn-success">Create Recipe</button></Link> : null
          }
        </div>
        <br />
        <div style={{ width: "100%", float: "left" }} className="list-group" >
          {recipes.map((item) => {
            return (
              <a className="list-group-item list-group-item-action recipe_btn" id={(list_type == constants.recipeList.BOOKMARK_LIST) ? item.id : null} key={(list_type == constants.recipeList.BOOKMARK_LIST) ? item.recipe_id : item.id} style={{ cursor: "pointer" }}>
                <button type="button" onClick={(e) => this.changeModal(e, item)} className="btn btn-danger btn-circle" style={{ float: "right", marginTop: "5px" }} data-toggle="modal" data-target="#myModal">
                  <i className="glyphicon glyphicon-remove"></i>
                </button>
                { (list_type !== constants.recipeList.BOOKMARK_LIST) ?
                  <Link to={"recipes/edit/" + ((list_type == constants.recipeList.BOOKMARK_LIST) ? item.recipe_id : item.id)}>
                    <button type="button" className="btn btn-success btn-circle" style={{ float: "right", marginTop: "5px", marginRight: "10px" }}>
                      <i className="glyphicon glyphicon-edit"></i>
                    </button>
                  </Link>
                : null }  
                <Link to={"recipe/" + ((list_type == constants.recipeList.BOOKMARK_LIST) ? item.recipe_id : item.id)}><img src={'../images/recip.jpg'}
                  alt="Avatar" className="dash_img" style={{ marginLeft: "5px", width: "150px", height: "150px", float: "left" }} /></Link>
                <div className="recipe_btn_content" style={{ marginTop: "-15px" }}>
                  <Link to={"recipe/" + ((list_type == constants.recipeList.BOOKMARK_LIST) ? item.recipe_id : item.id)}><h4 style={{ display: "inline" }}>
                    {((list_type == constants.recipeList.BOOKMARK_LIST) ? item.recipe.name : item.name) + " "}
                  </h4></Link><span />
                  <Link to={"recipe/" + ((list_type == constants.recipeList.BOOKMARK_LIST) ? item.recipe_id : item.id)}><div className="panel panel-default" style={{ marginTop: "10px" }}>
                    <table className="table table-bordered table-striped" style={{ textAlign: "center" }}>
                      <tbody><tr>
                        {
                          constants.mealPlanner.macroNutrients.map((nutrient) => {
                              return <td className="macro_col">{nutrient} {(nutrient === 'Energy') ? "(kCal)" : "(g)"}</td>
                          })
                        }
                      </tr>
                        <tr>
                              <td className="macro_col">{(list_type == constants.recipeList.BOOKMARK_LIST) ? item.recipe.calories : item.calories}</td>
                              <td className="macro_col">{(list_type == constants.recipeList.BOOKMARK_LIST) ? item.recipe.cabs : item.cabs}</td>
                              <td className="macro_col">{(list_type == constants.recipeList.BOOKMARK_LIST) ? item.recipe.fat : item.fat}</td>
                              <td className="macro_col">{(list_type == constants.recipeList.BOOKMARK_LIST) ? item.recipe.protein : item.protein}</td>
                              <td className="macro_col">{(list_type == constants.recipeList.BOOKMARK_LIST) ? item.recipe.sodium : item.sodium}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div></Link>
                </div>
              </a>
            );
          })}
        </div >
      </div >
    );
  }
}

export default RecipeList;
