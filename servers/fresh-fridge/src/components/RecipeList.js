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
    // let recipes = [];
    // if (this.props.list_type === constants.recipeList.BOOKMARK_LIST) {
    //   let users = this.props.users;
    //   let bookmarks = users.find(x => x.id === this.props.curr_user).bookmarks;
    //   this.props.recipeInfo.forEach(recipe => {
    //     if (!isUndefined(bookmarks.find(x => x === recipe.id))) {
    //       recipes.push(recipe.id);
    //     }
    //   });
    // } else {
    //   this.props.recipeInfo.forEach((recipe) => {
    //     if (recipe.creator === this.props.curr_user) {
    //       recipes.push(recipe.id);
    //     }
    //   });
    // }

    this.state = {
      recipes: [],
      modalRecipe: {
        id: 0,
        name: ''
      }
    }

    if (this.props.list_type == constants.recipeList.BOOKMARK_LIST) {
      console.log("ENTER");
      const receiveBookmarks = (recipes) => {
        this.setState({ recipes });
        console.log("BOOKMARKS", recipes);
        console.log("RECIPES", this.state.recipes);
      }
      console.log("USER", this.props.user);
      api.getBookmarks(2, receiveBookmarks);
    }
  }

  componentWillMount() {
  }

  deleteRecipe = (e, recipeId) => {
    e.preventDefault();
    if (this.props.list_type === constants.recipeList.BOOKMARK_LIST) {
      // delete from bookmark list
      let users = this.props.users;
      let bookmarks = users.find(x => x.id === this.props.curr_user).bookmarks;
      bookmarks.splice(bookmarks.indexOf(recipeId), 1);
      console.log("DELETE", users);
      this.props.editBookmark(users);
    } else {
      // delete from list by user
      let recipeInfo = this.props.recipeInfo;
      recipeInfo.splice(recipeInfo.indexOf(recipeInfo.find(x => x.id === recipeId)), 1);
      this.props.editRecipes(recipeInfo);
    }
    let { recipes } = this.state;
    recipes.splice(recipes.indexOf(recipeId), 1);
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
    let users = this.props.users;
    console.log(users);
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
                      <button type="button" onClick={(e) => this.deleteRecipe(e, this.state.modalRecipe.id)} class="btn btn-danger" data-dismiss="modal">Remove</button>
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
            // let recipe = this.props.recipeInfo.find(x => x.id === recipeId);
            return (
              <a className="list-group-item list-group-item-action recipe_btn" key={item.recipe_id} style={{ cursor: "pointer" }}>
                <button type="button" onClick={(e) => this.changeModal(e, item)} className="btn btn-danger btn-circle" style={{ float: "right", marginTop: "5px" }} data-toggle="modal" data-target="#myModal">
                  <i className="glyphicon glyphicon-remove"></i>
                </button>
                { (list_type !== constants.recipeList.BOOKMARK_LIST) ?
                  <Link to={"recipes/edit/" + item.recipe_id}>
                    <button type="button" className="btn btn-success btn-circle" style={{ float: "right", marginTop: "5px", marginRight: "10px" }}>
                      <i className="glyphicon glyphicon-edit"></i>
                    </button>
                  </Link>
                : null }  
                <Link to={"recipe/" + item.recipe_id}><img src={'../images/recip.jpg'} alt="Avatar" className="dash_img" style={{ marginLeft: "5px", width: "150px", height: "150px", float: "left" }} /></Link>
                <div className="recipe_btn_content" style={{ marginTop: "-15px" }}>
                  <Link to={"recipe/" + item.recipe_id}><h4 style={{ display: "inline" }}>{item.recipe.name + " "}</h4></Link><span />
                  {/* {
                    (list_type !== constants.recipeList.BOOKMARK_LIST && !isUndefined(users)) ?
                    <div style={{ display: "inline", fontSize: "14px" }}>by {users.find(x => x.id == recipe.creator).username}</div> : null
                  } */}
                  <Link to={"recipe/" + item.recipe_id}><div className="panel panel-default" style={{ marginTop: "10px" }}>
                    <table className="table table-bordered table-striped" style={{ textAlign: "center" }}>
                      <tbody><tr>
                        {
                          constants.mealPlanner.macroNutrients.map((nutrient) => {
                              return <td className="macro_col">{nutrient} {(nutrient === 'Energy') ? "(kCal)" : "(g)"}</td>
                          })
                        }
                      </tr>
                        <tr>
                          {/* {
                          constants.mealPlanner.macroNutrients.map((nutrient) => {
                                return <td className="macro_col">{recipe.macros[nutrient]}</td>
                            })
                          } */}
                          <td className="macro_col">{item.recipe.carolies}</td>
                          <td className="macro_col">{item.recipe.cabs}</td>
                          <td className="macro_col">{item.recipe.fat}</td>
                          <td className="macro_col">{item.recipe.protein}</td>
                          <td className="macro_col">{item.recipe.duration}</td>
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

// const RecipeList = (props) => {
//   return (
//     <div className="body_container">
//       <div style={{ width: "100%", float: "left" }}>
//         <h3 style={{ float: "left" }}>My Recipes</h3>
//         <button style={{ float: "right" }} type="button" onClick={(e) => props.addRecipeOnClick(e)} className="btn btn-success">Create Recipe</button>
//       </div>
//       <br />
//       <div style={{ width: "100%", float: "left" }} className="list-group" >
//         {props.recipesList.map((recipe) => {
//           return (
//             <a className="list-group-item list-group-item-action recipe_btn" key={recipe.id} style={{ cursor: "pointer" }}>
//               <button type="button" onClick={(e) => props.delRecipeOnClick(e, recipe.id)} className="btn btn-danger btn-circle" style={{ float: "right", marginTop: "5px" }} data-toggle="modal" data-target="#myModal">
//                 <i className="glyphicon glyphicon-remove"></i>
//               </button>
//               <button onClick={(e) => props.editRecipeOnClick(e, recipe.id)} type="button" className="btn btn-success btn-circle" style={{ float: "right", marginTop: "5px", marginRight: "10px" }}><i className="glyphicon glyphicon-edit"></i></button>
//               <img onClick={(e) => props.onRecipeClick(e, recipe.id)} src={"./images/" + recipe.image + ".jpg"} alt="Avatar" className="dash_img" style={{ marginLeft: "5px", width: "150px", height: "150px", float: "left" }} />
//               <div className="recipe_btn_content" style={{ marginTop: "-15px" }}>
//                 <h4 onClick={(e) => props.onRecipeClick(e)} style={{ display: "inline" }}>{recipe.name}</h4> <span />
//                 <div style={{ display: "inline", fontSize: "14px" }}>by LondonFitness</div>
//                 <div onClick={(e) => props.onRecipeClick(e)} className="panel panel-default" style={{ marginTop: "10px" }}>
//                   <table className="table table-bordered table-striped" style={{ textAlign: "center" }}>
//                     <tbody><tr>
//                       <td>Calories (???)</td>
//                       <td>Carbohydrates (g)</td>
//                       <td>Protein (g)</td>
//                       <td>Fats (g)</td>
//                     </tr>
//                       <tr>
//                         <td className="macro_col">{recipe.calories}</td>
//                         <td className="macro_col">{recipe.cabs}</td>
//                         <td className="macro_col">{recipe.protein}</td>
//                         <td className="macro_col">{recipe.fats}</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </a>
//           );
//         })}
//       </div >
//     </div >
//   );
// };


// const mapStateToProps = (state) => {
//   console.log('map state%%%%%%%%%%', state.recipeList)
//   return {
//     recipesList: state.recipeList[0].myrecipes
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addRecipeOnClick(e) {
//       console.log('click add my recipe');
//     },
//     editRecipeOnClick(e, id) {
//       console.log('click edit my recipe ', id);
//     },
//     delRecipeOnClick(e, id) {
//       console.log('click delete my recipe', id);
//     },
//     onRecipeClick(e, id) {
//       console.log('click my recipe');
//       // dispatch({type: constants.SELECT_RECIPE, select_id: id});
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
