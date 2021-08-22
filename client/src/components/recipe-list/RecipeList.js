import React from 'react';
import constants from '../../constants';
import {isUndefined} from 'util';
import Link from 'react-router-dom/Link';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    let recipes = [];

    if (this.props.list_type === constants.recipeList.BOOKMARK_LIST) {
      let users = this.props.users;
      let bookmarks = users.find((x) => x.id === this.props.curr_user).bookmarks;
      this.props.recipeInfo.forEach((recipe) => {
        if (!isUndefined(bookmarks.find((x) => x === recipe.id))) {
          recipes.push(recipe.id);
        }
      });
    } else {
      this.props.recipeInfo.forEach((recipe) => {
        if (recipe.creator === this.props.curr_user) {
          recipes.push(recipe.id);
        }
      });
    }

    this.state = {
      recipes: recipes,
      modalRecipe: {
        id: 0,
        name: '',
      },
    };
  }

  editRecipes = (recipes) => this.setState({recipes});

  deleteRecipe = (e, recipeId) => {
    e.preventDefault();
    if (this.props.list_type === constants.recipeList.BOOKMARK_LIST) {
      let users = this.props.users;
      let bookmarks = users.find((x) => x.id === this.props.curr_user).bookmarks;
      bookmarks.splice(bookmarks.indexOf(recipeId), 1);
      console.log('DELETE', users);
      this.props.editBookmark(users);
    } else {
      let recipeInfo = this.props.recipeInfo;
      recipeInfo.splice(recipeInfo.indexOf(recipeInfo.find((x) => x.id === recipeId)), 1);
      this.editRecipes(recipeInfo);
    }
    let {recipes} = this.state;
    recipes.splice(recipes.indexOf(recipeId), 1);
    this.setState({recipes});
  };

  changeModal = (e, recipe) => {
    e.preventDefault();
    let {modalRecipe} = this.state;
    modalRecipe = recipe;
    this.setState({modalRecipe});
  };

  render() {
    let list_type = this.props.list_type;
    let users = this.props.users;

    let {recipes} = this.state;
    return (
      <div className='body_container'>
        {/* {<!-- Modal -->} */}
        <div id='myModal' className='modal fade' role='dialog'>
          <div className='modal-dialog'>
            {/* <!-- Modal content--> */}
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal'>
                  &times;
                </button>
                <h4 className='modal-title'>Remove Recipe</h4>
              </div>
              <div>
                <div className='modal-body'>
                  <p>
                    Delete '{this.state.modalRecipe.name}' from{' '}
                    {list_type === constants.recipeList.BOOKMARK_LIST ? 'bookmarked recipes' : 'my recipes'}?
                  </p>
                </div>
                <div className='modal-footer'>
                  <button type='button' className='btn btn-secondary' data-dismiss='modal'>
                    Cancel
                  </button>
                  <button
                    type='button'
                    onClick={(e) => this.deleteRecipe(e, this.state.modalRecipe.id)}
                    className='btn btn-danger'
                    data-dismiss='modal'
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{width: '100%', float: 'left'}}>
          <h3 style={{float: 'left'}}>
            {list_type === constants.recipeList.BOOKMARK_LIST ? 'Bookmarked Recipes' : 'My Recipes'}
          </h3>
          {list_type !== constants.recipeList.BOOKMARK_LIST ? (
            <Link to='recipes/add'>
              <button style={{float: 'right'}} type='button' className='btn btn-success'>
                Create Recipe
              </button>
            </Link>
          ) : null}
        </div>
        <br />
        <div style={{width: '100%', float: 'left'}} className='list-group'>
          {recipes.map((recipeId) => {
            let recipe = this.props.recipeInfo.find((x) => x.id === recipeId);
            return (
              <a
                className='list-group-item list-group-item-action recipe_btn'
                key={recipe.id}
                style={{cursor: 'pointer'}}
              >
                <button
                  type='button'
                  onClick={(e) => this.changeModal(e, recipe)}
                  className='btn btn-danger btn-circle'
                  style={{float: 'right', marginTop: '5px'}}
                  data-toggle='modal'
                  data-target='#myModal'
                >
                  <i className='glyphicon glyphicon-remove'></i>
                </button>
                {list_type !== constants.recipeList.BOOKMARK_LIST ? (
                  <Link to={'recipes/edit/' + recipe.id}>
                    <button
                      type='button'
                      className='btn btn-success btn-circle'
                      style={{float: 'right', marginTop: '5px', marginRight: '10px'}}
                    >
                      <i className='glyphicon glyphicon-edit'></i>
                    </button>
                  </Link>
                ) : null}
                <Link to={'recipe/' + recipe.id}>
                  <img
                    src={recipe.img[0]}
                    alt='Avatar'
                    className='dash_img'
                    style={{marginLeft: '5px', width: '150px', height: '150px', float: 'left'}}
                  />
                </Link>
                <div className='recipe_btn_content' style={{marginTop: '-15px'}}>
                  <Link to={'recipe/' + recipe.id}>
                    <h4 style={{display: 'inline'}}>{recipe.name + ' '}</h4>
                  </Link>
                  <span />
                  {list_type !== constants.recipeList.BOOKMARK_LIST && !isUndefined(users) ? (
                    <div style={{display: 'inline', fontSize: '14px'}}>
                      by {users.find((x) => x.id === recipe.creator).username}
                    </div>
                  ) : null}
                  <Link to={'recipe/' + recipe.id}>
                    <div className='panel panel-default' style={{marginTop: '10px'}}>
                      <table className='table table-bordered table-striped' style={{textAlign: 'center'}}>
                        <tbody>
                          <tr>
                            {constants.mealPlanner.macroNutrients.map((nutrient) => {
                              return (
                                <td className='macro_col'>
                                  {nutrient} {nutrient === 'Energy' ? '(kCal)' : '(g)'}
                                </td>
                              );
                            })}
                          </tr>
                          <tr>
                            {constants.mealPlanner.macroNutrients.map((nutrient) => {
                              return <td className='macro_col'>{recipe.macros[nutrient]}</td>;
                            })}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Link>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RecipeList;
