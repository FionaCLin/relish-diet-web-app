import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import { sortDiet } from '../constants/dummyData';
import { isUndefined } from 'util';
import Link from 'react-router-dom/Link';
import { isNullOrUndefined } from 'util';
import SearchInputForm from './SearchInputForm';
import NavLink from 'react-router-dom/NavLink';
import api from '../api';

class Search extends React.Component {
    constructor(props) {
        super(props);
        const tags = this.processUrl();
        const recipes = (!isNullOrUndefined(this.props.match.params.name)) ? this.searchName(this.props.recipeInfo, tags) :
            (!isNullOrUndefined(this.props.match.params.macros) ? this.searchMacros(this.props.recipeInfo, tags) : []);
        this.state = {
            recipes,
            tags,
            Energy: '',
            Carbs: '',
            Protein: '',
            Fats: '',
            Sodium: '',
            option: true,
            goal: null
        }
        console.log(this.state.recipes);
    }

    changeEnergy = (e) => {
        e.preventDefault();
        let Energy = e.target.value;
        this.setState({ Energy });
    }

    changeCarbs = (e) => {
        e.preventDefault();
        let Carbs = e.target.value;
        this.setState({ Carbs });
    }

    changeProtein = (e) => {
        e.preventDefault();
        let Protein = e.target.value;
        this.setState({ Protein });
    }

    changeFats = (e) => {
        e.preventDefault();
        let Fats = e.target.value;
        this.setState({ Fats });
    }

    changeSodium = (e) => {
        e.preventDefault();
        let Sodium = e.target.value;
        this.setState({ Sodium });
    }

    processUrl = (e) => {
        let tags = [];
        if (!isNullOrUndefined(this.props.match.params.name)) {
            tags.push(this.props.match.params.name);
        } else if (!isNullOrUndefined(this.props.match.params.macros)) {
            tags = this.props.match.params.macros.split('l');
            tags = tags.map((tag) => parseInt(tag, 10));
        }
        return tags;
    }

    macroUrl = () => {
        let url = '';
        constants.mealPlanner.macroNutrients.forEach((nutrient) => {
            url += this.state[nutrient] + 'l';
        })
        url = url.slice(0, -1);
        return url;
    }

    searchName = (recipes, tags) => {
        let name = tags[0];
        console.log("NAME", name);
        let sorted = [];
        recipes.forEach((recipe) => {
            console.log("NAMES", recipe.name, name);
            if (recipe.name.toLowerCase().includes(name.toLowerCase())) {
                sorted.push(recipe);
            }
        })
        return sorted;
    }

    searchMacros = (recipes, tags) => {
        let sorted = [];
        recipes.forEach((recipe) => {
            if ((isNaN(tags[0]) || (!isNaN(tags[0]) && recipe.macros.Energy < tags[0])) &&
                (isNaN(tags[1]) || (!isNaN(tags[1]) && recipe.macros.Carbs < tags[1])) &&
                (isNaN(tags[2]) || (!isNaN(tags[2]) && recipe.macros.Protein < tags[2])) &&
                (isNaN(tags[3]) || (!isNaN(tags[3]) && recipe.macros.Fats < tags[3])) &&
                (isNaN(tags[4]) || (!isNaN(tags[4]) && recipe.macros.Sodium < tags[4]))) {
                sorted.push(recipe);
            }
        });
        return sorted;
    }

    swapButton = (e, flag) => {
        e.preventDefault();
        let option = flag;
        this.setState({ option });
    }

    setGoal = (e, goal) => {
        e.preventDefault();
        let goals = sortDiet[goal].map((diet) => {
            if (isNaN(diet)) {
                return ''
            } else {
                return diet;
            }
        })
        this.setState({ goal });
        this.setState({ Energy: goals[0] });
        this.setState({ Carbs: goals[1] });
        this.setState({ Protein: goals[2] });
        this.setState({ Fats: goals[3] });
        this.setState({ Sodium: goals[4] });
    }

    onGoalSearch = (e) => {
        // need to make the NaN as a string, because the route make
        // NaN as null, null treated as 0, so quote the NaN as a string
        let goals = [{
            calories: 100,
            cabs: 'NaN',
            fats: 'NaN',
            protein: 'NaN',
            sodium: 'NaN'
        }]
        let userId = 1;
        api.getDashboardWithGoal(userId,goals,(res) =>{

        });
    }
    render() {
        return (
            <div className="body_container">
                <SearchInputForm />
                <div class="panel-group">
                    <div class="panel panel-default">
                        <div class="panel-heading btn btn-default" style={{ width: "100%", height: "25px", paddingTop: "2px", textAlign: "left" }} data-toggle="collapse" href="#collapse1">+ Advanced Search</div>
                        <div id="collapse1" class="panel-collapse collapse">
                            <div class="panel-footer" style={{ height: "135px" }}>
                                <div class="form-group">
                                    {(this.state.option) ?
                                        <div>
                                            <div style={{ float: "left", width: "20%", paddingLeft: "20px", paddingRight: "20px" }}>
                                                <label for="carbs" style={{ fontWeight: "normal", fontSize: "small" }}>Energy (kCal)</label>
                                                <input type="number" onChange={(e) => this.changeEnergy(e)} value={this.state.Energy} class="form-control" id="carbs" placeholder="Kilojoules" min="0"></input>
                                            </div>
                                            <div style={{ float: "left", width: "20%", paddingLeft: "20px", paddingRight: "20px" }}>
                                                <label for="carbs" style={{ fontWeight: "normal", fontSize: "small" }}>Carbohydrates (g)</label>
                                                <input type="number" onChange={(e) => this.changeCarbs(e)} value={this.state.Carbs} class="form-control" id="carbs" placeholder="Carbohydrates" min="0"></input>
                                            </div>
                                            <div style={{ float: "left", width: "20%", paddingLeft: "20px", paddingRight: "20px" }}>
                                                <label for="carbs" style={{ fontWeight: "normal", fontSize: "small" }}>Protein (g)</label>
                                                <input type="number" onChange={(e) => this.changeProtein(e)} value={this.state.Protein} class="form-control" id="carbs" placeholder="Protein" min="0"></input>
                                            </div>
                                            <div style={{ float: "left", width: "20%", paddingLeft: "20px", paddingRight: "20px" }}>
                                                <label for="carbs" style={{ fontWeight: "normal", fontSize: "small" }}>Fats (g)</label>
                                                <input type="number" onChange={(e) => this.changeFats(e)} value={this.state.Fats} class="form-control" id="carbs" placeholder="Fats" min="0"></input>
                                            </div>
                                            <div style={{ float: "left", width: "20%", paddingLeft: "20px", paddingRight: "20px" }}>
                                                <label for="carbs" style={{ fontWeight: "normal", fontSize: "small" }}>Sodium (g)</label>
                                                <input type="number" onChange={(e) => this.changeSodium(e)} value={this.state.Sodium} class="form-control" id="carbs" placeholder="Sodium" min="0"></input>
                                            </div>
                                        </div> :
                                        <div style={{ margin: "13px", marginLeft: "20px" }}>
                                            <button class={(this.state.goal == 0) ? "btn btn-success" : "btn btn-default"} onClick={(e) => this.setGoal(e, 0)} style={{ width: "260px" }}>Slimming</button>
                                            <button class={(this.state.goal == 1) ? "btn btn-success" : "btn btn-default"} onClick={(e) => this.setGoal(e, 1)} style={{ width: "260px" }}>Muscle Building</button>
                                            <button class={(this.state.goal == 2) ? "btn btn-success" : "btn btn-default"} onClick={(e) => this.setGoal(e, 2)} style={{ width: "260px" }}>Weight Loss</button>
                                            <button class={(this.state.goal == 3) ? "btn btn-success" : "btn btn-default"} onClick={(e) => this.setGoal(e, 3)} style={{ width: "260px" }}>Stamina Training</button>
                                            <button class={(this.state.goal == 4) ? "btn btn-success" : "btn btn-default"} onClick={(e) => this.setGoal(e, 4)} style={{ width: "260px" }}>General Fitness</button>
                                        </div>
                                    }
                                    <button class={(this.state.option) ? "btn btn-secondary" : "btn btn-default"} onClick={(e) => this.swapButton(e, true)} style={{ float: "left", marginTop: "15px", marginLeft: "20px" }}>Macro Limits</button>
                                    <button class={(this.state.option) ? "btn btn-default" : "btn btn-secondary"} onClick={(e) => this.swapButton(e, false)} style={{ float: "left", marginTop: "15px", marginLeft: "20px" }}>Goal Options</button>
                                    <div style={{ float: "right", marginTop: "15px", marginRight: "20px" }}>
                                        {/* <NavLink to={'../../search/macros/' + this.macroUrl()} > */}
                                        <button class="btn btn-default" onClick={(e) => this.onGoalSearch(e)} type="submit">Advanced Search</button>
                                        {/* </NavLink> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    Search results for:
                {
                        (this.state.tags.length > 1) ?
                            this.state.tags.map((tag, index) => {
                                console.log(tag);
                                if (!isNaN(tag)) {
                                    return <span class="label label-success">{constants.mealPlanner.macroNutrients[index] + ": < " + tag}{(index == 0) ? " kCal" : " g"}</span>
                                }
                            }) :
                            this.state.tags.map((tag) => {
                                return <span class="label label-success">{tag}</span>
                            })
                    }
                </div>
                <br></br>
                <div class="list-group">
                    {this.state.recipes.map((recipe) => {
                        return (
                            <Link to={"../../recipe/" + recipe.id} class="list-group-item list-group-item-action recipe_btn">
                                <img src={"../../" + recipe.img[0]} alt="Avatar" class="dash_img" style={{ marginLeft: "5px", width: "150px", height: "150px", float: "left" }}></img>
                                <div class="recipe_btn_content">
                                    <h4 style={{ display: "inline" }}>{recipe.name + " "}</h4>
                                    <div style={{ display: "inline", fontSize: "14px" }}>by {this.props.users.find(x => x.id == recipe.creator).username}</div>
                                    <span></span>
                                    <div class="panel panel-default" style={{ marginTop: "10px" }}>
                                        <table class="table table-bordered table-striped" style={{ textAlign: "center" }}>
                                            <tbody>
                                                <tr>
                                                    <td>Energy (kCal)</td>
                                                    <td>Carbs (g)</td>
                                                    <td>Protein (g)</td>
                                                    <td>Fats (g)</td>
                                                    <td>Sodium (g)</td>
                                                </tr>
                                                <tr>
                                                    <td class="macro_col">{recipe.macros.Energy}</td>
                                                    <td class="macro_col">{recipe.macros.Carbs}</td>
                                                    <td class="macro_col">{recipe.macros.Protein}</td>
                                                    <td class="macro_col">{recipe.macros.Fats}</td>
                                                    <td class="macro_col">{recipe.macros.Sodium}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                    }
                </div>
            </div>
        )
    }

}

export default Search;
