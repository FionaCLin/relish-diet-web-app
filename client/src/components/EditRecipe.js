import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import { isUndefined, isNull, isNullOrUndefined } from 'util';
import Link from 'react-router-dom/Link';

class EditRecipe extends React.Component {
    constructor(props) {
        super(props);
        let recipe = null;

        if (this.props.match.params.mode == 'edit') {
            recipe = this.props.recipeInfo.find(x => x.id == this.props.match.params.id)
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
                    Sodium: 50
                },
                img: []
            }
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
            img: recipe.img
        }
    }

    autocomplete = (e) => {
        e.preventDefault();
        let ingredientsProp = [];
        let string = e.target.value;
        for (let ingredient of this.props.ingredientList) {
            if (ingredient.includes(e.target.value)) {
                ingredientsProp.push(ingredient);
                if (ingredientsProp.length  === 6) {
                    break;
                }
            }
        }
        this.setState({string});
        this.setState({ingredientsProp});
    }

    addIngredient = (e) => {
        e.preventDefault();
        let { ingredients } = this.state;
        let ingredient = this.state.amount + ' ' + this.state.measure + ' of ' + this.state.string;
        ingredients.push(ingredient);
        this.setState({ingredients});
        let string = '';
        this.setState({string});
        let amount = '';
        this.setState({amount});
        let measure = '';
        this.setState({measure});
    }

    changeMeasure = (e) => {
        e.preventDefault();
        let measure = e.target.value;
        this.setState({measure});
    }

    changeAmount = (e) => {
        e.preventDefault();
        let amount = e.target.value;
        this.setState({amount});
    }

    removeIngredient = (e, ingredient) => {
        e.preventDefault();
        let { ingredients } = this.state;
        ingredients.splice(ingredients.indexOf(ingredient), 1);
        this.setState({ingredients});
    }

    changeTitle = (e) => {
        e.preventDefault();
        let { name } = this.state;
        name = e.target.value;
        this.setState({name});
    }

    changeMethod = (e) => {
        e.preventDefault();
        let { method } = this.state;
        method = e.target.value;
        this.setState({method});
    }

    changeImg = (e, index) => {
        e.preventDefault();
        let { img } = this.state;
        let image = e.target.value.split('\\');
        img[index] = 'images/' + image[image.length - 1];
        this.setState({img});
    }

    editRecipe = (e) => {
        e.preventDefault();
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
                Sodium: 10
            },
            method: this.state.method,
            ingredients: this.state.ingredients,
            comments: []
        };

        if (this.props.match.params.mode == 'edit') {
            let recipeIndex = recipes.indexOf(recipes.find(x => x.id == this.props.match.params.id));
            recipes[recipeIndex] = recipe;
        } else {
            recipes.unshift(recipe);
        }
        this.props.editRecipes(recipes);
        console.log("Enter", recipe);
    }



    render() {
        return (
            <div class="recipe_container">
                <h4>{ (this.props.match.params.mode == 'add') ? "New" : "Edit"} Recipe</h4>
                <br></br>
                <form>
                    <div class="form-group row">
                        <label for="inputTitle" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="title" value={this.state.name} onChange={(e) => this.changeTitle(e)} class="form-control" id="inputTitle" placeholder="Recipe title"></input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputIngredients" class="col-sm-2 col-form-label">Ingredients</label>
                        <div class="col-sm-10">
                            <input name="amount" value={this.state.amount} onChange={(e) => this.changeAmount(e)} placeholder="amount e.g. 1" size="8" style={{float: "left", width:"150px", height: "32px"}}></input>
                            <select value={this.state.measure} onChange={(e) => this.changeMeasure(e)} style={{float: "left", height: "32px"}}>
                                <option></option>
                                <option>g</option>
                                <option>ml</option>
                                <option>tbsp</option>
                                <option>tsp</option>
                            </select>
                            <div style={{float: "left", marginLeft:"10px", marginRight:"10px", lineHeight:"32px"}}>of</div>
                            <input list="ingredients" value={this.state.string} name="ingredients" placeholder="ingredient" onChange={(e) => this.autocomplete(e)} style={{float: "left", width: "540px", height: "32px"}}></input>
                            <datalist id="ingredients">
                                {
                                    this.state.ingredientsProp.map((ingredient) => {
                                        return <option>{ingredient}</option>
                                    })
                                }
                            </datalist>
                            <button style={{float: "right"}} onClick={(e) => this.addIngredient(e)} class="btn btn-secondary">+</button>
                            { (this.state.ingredients.length !== 0) ?
                                <ul style={{float: "left", marginTop: "5px"}} >
                                    {
                                        this.state.ingredients.map((ingredient) => {
                                            return <li><button onClick={(e) => this.removeIngredient(e, ingredient)} class="btn btn-secondary" style={{marginTop:"10px", width: "500px", textAlign:"left"}}>
                                                        {ingredient}
                                                        <span class="pull-right">
                                                            <span class="glyphicon glyphicon-remove">
                                                            </span>
                                                        </span>
                                                    </button></li>
                                        })
                                    }
                                </ul> : null
                            }
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label for="inputMethod" class="col-sm-2 col-form-label">Method</label>
                        <div class="col-sm-10">
                        <textarea type="comment" onChange={(e) => this.changeMethod(e)} value={this.state.method} class="form-control" id="inputMethod" rows="5" placeholder="Add method..."></textarea>
                        </div>
                    </div>
                    <hr></hr>
                    <h4>Recipe Images</h4>
                    <br></br>
                    <div class="form-group row">
                        <label for="inputImage1" class="col-sm-2 col-form-label">Image 1</label>
                        <div class="col-sm-10">
                            <div style={{float:"left"}}>
                                <input onChange={(e) => this.changeImg(e, 0)} type="file" class="form-control-file" id="inputImage1"></input>
                            </div>
                            { (!isNullOrUndefined(this.state.img[0])) ?
                                <div style={{float:"right"}}>
                                    <div style={bg_img(this.state.img[0])} class="planner_img_v"></div>
                                <div class="pic_bottom">Current Image</div>
                                </div> : null
                            }
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputImage1" class="col-sm-2 col-form-label">Image 2</label>
                        <div class="col-sm-10">
                            <div style={{float:"left"}}>
                                <input onChange={(e) => this.changeImg(e, 1)} type="file" class="form-control-file" id="inputImage1"></input>
                            </div>
                            { (!isNullOrUndefined(this.state.img[1])) ?
                                <div style={{float:"right"}}>
                                    <div style={bg_img(this.state.img[1])} class="planner_img_v"></div>
                                <div class="pic_bottom">Current Image</div>
                                </div> : null
                            }
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputImage1" class="col-sm-2 col-form-label">Image 3</label>
                        <div class="col-sm-10">
                            <div style={{float:"left"}}>
                                <input onChange={(e) => this.changeImg(e, 2)} type="file" class="form-control-file" id="inputImage1"></input>
                            </div>
                            { (!isNullOrUndefined(this.state.img[2])) ?
                                <div style={{float:"right"}}>
                                    <div style={bg_img(this.state.img[2])} class="planner_img_v"></div>
                                <div class="pic_bottom">Current Image</div>
                                </div> : null
                            }
                        </div>
                    </div>
            </form>
            <div style={{float:"right"}}>
                <Link to="../../recipes"><button class="btn btn-secondary" style={{width:"110px", marginRight:"10px"}}>Cancel</button></Link>
                <button class="btn btn-success" onClick={(e) => this.editRecipe(e)} style={{width:"115px"}}><Link to="../../recipes">{ (this.props.match.params.mode == 'add') ? "Create" : "Edit"}</Link></button>
            </div>
            {/* <!--container end--> */}
            </div>
        )
    }
}

export default EditRecipe;