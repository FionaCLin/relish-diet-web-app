import React from 'react';
import constants from '../../constants';
import {connect} from 'react-redux';
import {bg_img} from '../../constants/globalFunctions';
import {isUndefined, isNull, isNullOrUndefined} from 'util';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Modal, Button} from 'react-bootstrap';

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    let recipe = null;
    console.log(this.props);
    const {params} = this.props['0'].match;
    if (params.mode == 'edit') {
      recipe = this.props.recipeInfo.find((x) => x.id == params.id);
    } else {
      recipe = {
        name: '',
        method: '',
        ingredients: [],
        macros: {
          Energy: 10,
          Carbs: 20,
          Protein: 30,
          Fats: 40,
          Sodium: 50,
        },
        img: [],
      };
    }

    console.log(recipe.img);
    this.state = {
      ingredientsProp: [],
      string: '',
      measure: '',
      amount: '',
      name: recipe.name,
      ingredients: recipe.ingredients,
      method: recipe.method,
      macros: recipe.macros,
      img: recipe.img,
    };
  }

  autocomplete = (e) => {
    e.preventDefault();
    let ingredientsProp = [];
    let string = e.target.value;
    for (let ingredient of this.props.ingredientList) {
      if (ingredient.includes(e.target.value)) {
        ingredientsProp.push(ingredient);
        if (ingredientsProp.length === 6) {
          break;
        }
      }
    }
    this.setState({string});
    this.setState({ingredientsProp});
  };

  addIngredient = (e) => {
    e.preventDefault();
    let {ingredients} = this.state;
    let ingredient = this.state.amount + ' ' + this.state.measure + ' of ' + this.state.string;
    ingredients.push(ingredient);
    this.setState({ingredients});
    let string = '';
    this.setState({string});
    let amount = '';
    this.setState({amount});
    let measure = '';
    this.setState({measure});
  };

  changeMeasure = (e) => {
    e.preventDefault();
    let measure = e.target.value;
    this.setState({measure});
  };

  changeAmount = (e) => {
    e.preventDefault();
    let amount = e.target.value;
    this.setState({amount});
  };

  removeIngredient = (e, ingredient) => {
    e.preventDefault();
    let {ingredients} = this.state;
    ingredients.splice(ingredients.indexOf(ingredient), 1);
    this.setState({ingredients});
  };

  changeTitle = (e) => {
    e.preventDefault();
    let {name} = this.state;
    name = e.target.value;
    this.setState({name});
  };

  changeMethod = (e) => {
    e.preventDefault();
    let {method} = this.state;
    method = e.target.value;
    this.setState({method});
  };

  changeImg = (e, index) => {
    e.preventDefault();
    let {img} = this.state;
    let image = e.target.value.split('\\');
    img[index] = 'images/' + image[image.length - 1];
    this.setState({img});
  };

  editRecipe = (e) => {
    e.preventDefault();
    const {params} = this.props['0'].match;
    let recipes = this.props.recipeInfo;
    let recipe = {
      id: 600,
      creator: this.props.curr_user,
      name: this.state.name,
      img: this.state.img,
      macros: {
        Energy: 60,
        Carbs: 80,
        Protein: 10,
        Fats: 60,
        Sodium: 10,
      },
      method: this.state.method,
      ingredients: this.state.ingredients,
      comments: [],
    };

    if (params.mode == 'edit') {
      let recipeIndex = recipes.indexOf(recipes.find((x) => x.id == params.id));
      recipes[recipeIndex] = recipe;
    } else {
      recipes.unshift(recipe);
    }
    this.props.editRecipes(recipes);
    console.log('Enter', recipe);
  };

  render() {
    const {params} = this.props['0'].match;
    console.log(this.props['0']);
    return (
      <div className='bg-white'>
        <Container className='pt-2 m-auto'>
          <Row className='justify-content-sm-between'>
            <Col md={4}>
              <h3>{params.mode == 'add' ? 'New' : 'Edit'} Recipe</h3>
            </Col>
            <Col md={{span: 2, offset: 6}}></Col>
          </Row>
          <br></br>
          <form>
            <div className='form-group row'>
              <label for='inputTitle' className='col-sm-2 col-form-label'>
                Title
              </label>
              <div className='col-sm-10'>
                <input
                  type='title'
                  value={this.state.name}
                  onChange={(e) => this.changeTitle(e)}
                  className='form-control'
                  id='inputTitle'
                  placeholder={params.mode == 'add' ? 'Add Title...' : 'Edit Title...'}
                ></input>
              </div>
            </div>
            <div className='form-group row'>
              <label for='inputIngredient' className='col-sm-2 col-form-label'>
                Ingredient
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  name='amount'
                  value={this.state.amount}
                  onChange={(e) => this.changeAmount(e)}
                  placeholder='E.g. 1'
                  size='8'
                  className='form-control amount' 
                  id='inputIngredient'                 
                ></input>                
                <select
                  value={this.state.measure}
                  onChange={(e) => this.changeMeasure(e)}
                  className='form-control measure'
                  placeholder='E.g. tbsp'
                >
                  <option>g</option>
                  <option>ml</option>
                  <option>tbsp</option>
                  <option>tsp</option>
                </select>
                <div style={{float: 'left', marginLeft: '10px', marginRight: '10px', lineHeight: '32px'}}>of</div>
                <input
                  list='ingredients'
                  value={this.state.string}
                  name='ingredients'
                  placeholder='E.g. sugar'
                  onChange={(e) => this.autocomplete(e)}
                  className='ingredient form-control has-action-button'
                ></input>
                <datalist id='ingredients'>
                  {this.state.ingredientsProp.map((ingredient) => {
                    return <option>{ingredient}</option>;
                  })}
                </datalist>
                <button style={{float: 'right'}} onClick={(e) => this.addIngredient(e)} className='btn btn-secondary'>
                  <span className='glyphicon glyphicon-plus'></span>
                </button>
                {this.state.ingredients.length !== 0 ? (
                  <ul className='editable-list'>
                    {this.state.ingredients.map((ingredient) => {
                      return (
                        <li>
                          <button onClick={(e) => this.removeIngredient(e, ingredient)} className='btn btn-secondary'>
                            {ingredient}
                            <span className='pull-right'>
                              <span className='glyphicon glyphicon-remove'></span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            </div>

            <div className='form-group row'>
              <label for='inputMethod' className='col-sm-2 col-form-label'>
                Method
              </label>
              <div className='col-sm-10'>
                <textarea
                  type='comment'
                  onChange={(e) => this.changeMethod(e)}
                  value={this.state.method}
                  className='form-control'
                  id='inputMethod'
                  rows='5'
                  placeholder='Add method...'
                ></textarea>
              </div>
            </div>
            <div className='form-group row'>
              <hr></hr>
            </div>
            <h4>Recipe Images</h4>
            <div className='form-group row'>
              <div className='col-sm-2'>
              <label for='inputImage1' className='col-form-label'>
                  Images
                </label>
              </div>
              <div className='col-sm-2'>
              <input
                  list='ingredients'
                  value={this.state.string}
                  name='ingredients'
                  placeholder='E.g. Step 1'
                  onChange={(e) => this.autocomplete(e)}
                  className='ingredient form-control'
                ></input>
              </div>
              <div className='col-sm-8'>
                <input
                  onChange={(e) => this.changeImg(e, 0)}
                  type='file'
                  className='form-control-file has-action-button'
                  id='inputImage1'
                ></input>
                <button style={{float: 'right'}} onClick={(e) => this.addIngredient(e)} className='btn btn-secondary'>
                  <span className='glyphicon glyphicon-plus'></span>
                </button>
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-2'>
              </div>
              <div className='col-sm-10'>
                {(this.state.img[0]) && (
                  <div>
                    <div style={bg_img(this.state.img[0])} className='planner_img_v'></div>
                    <div className='pic_bottom'>Step 1</div>
                  </div>
                )}
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-2'>                
              </div>
              <div className='col-sm-10'>
                {(this.state.img[1]) && (
                  <div>
                    <div style={bg_img(this.state.img[1])} className='planner_img_v'></div>
                    <div className='pic_bottom'>Step 2</div>
                  </div>
                )}
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-2'>
              </div>
              <div className='col-sm-10'>
                {(this.state.img[2]) && (
                  <div>
                    <div style={bg_img(this.state.img[2])} className='planner_img_v'></div>
                    <div className='pic_bottom'>Step 3</div>
                  </div>
                )}
              </div>
            </div>
          </form>
          <div 
            className='action-buttons-bottom'
          >
            <Link to='../../recipes'>
              <button className='btn btn-secondary' style={{width: '110px', marginRight: '10px'}}>
                Cancel
              </button>
            </Link>
            <button className='btn btn-success' onClick={(e) => this.editRecipe(e)} style={{width: '115px'}}>
              <Link to='../../recipes'>{params.mode == 'add' ? 'Create' : 'Edit'}</Link>
            </button>
          </div>
          {/* <!--container end--> */}
        </Container>
      </div>
    );
  }
}

export default EditRecipe;
