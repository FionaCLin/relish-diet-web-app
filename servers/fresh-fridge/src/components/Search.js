import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import { isUndefined, isNullOrUndefined } from 'util';
import Link from 'react-router-dom/Link';
import SearchInputForm from './SearchInputForm';
import NavLink from 'react-router-dom/NavLink';
import api from '../api';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            tags: [],
            calories: '',
            cabs: '',
            protein: '',
            fat: '',
            sodium: '',
            option: true,
            goal: null
        }
    }

    componentWillMount() {
        if (!isNullOrUndefined(this.props.match.params.name)) {
            const callback = (recipes) => {
                let tags = [this.props.match.params.name];
                this.setState({recipes, tags});
            };
            api.searchName(this.props.user.id, this.props.match.params.name, callback);
        }
    }

    changeEnergy = (e) => {
        e.preventDefault();
        let calories = e.target.value;
        this.setState({ calories });
    }

    changeCarbs = (e) => {
        e.preventDefault();
        let cabs = e.target.value;
        this.setState({ cabs });
    }

    changeProtein = (e) => {
        e.preventDefault();
        let protein = e.target.value;
        this.setState({ protein });
    }

    changeFats = (e) => {
        e.preventDefault();
        let fat = e.target.value;
        this.setState({ fat });
    }

    changeSodium = (e) => {
        e.preventDefault();
        let sodium = e.target.value;
        this.setState({ sodium });
    }

    getTags = () => {
        let tags = [];
        if (!isNullOrUndefined(this.props.match.params.name)) {
            tags.push(this.props.match.params.name);
        } else {
            constants.mealPlanner.smallMacros.map((nutrient) => {
                tags.push(this.state[nutrient]);
            })
        }
        this.setState({tags});
        return tags;
    }

    macroUrl = () => {
        let url = '';
        constants.mealPlanner.smallMacros.forEach((nutrient) => {
            url += this.state[nutrient] + 'l';
        })
        url = url.slice(0, -1);
        return url;
    }

    swapButton = (e, flag) => {
        e.preventDefault();
        let option = flag;
        this.setState({ option });
    }

    setGoal = (e, goal) => {
        e.preventDefault();
        let diet = constants.mealPlanner.sortDiet[goal];
        this.setState({ goal });
        this.setState({ calories: diet.calories });
        this.setState({ cabs: diet.cabs });
        this.setState({ protein: diet.protein });
        this.setState({ fat: diet.fat });
        this.setState({ sodium: diet.sodium });
    }

    onGoalSearch = (e) => {
        const goalResult = (recipes) => {
            this.setState({recipes});
            this.getTags();
            console.log("ENTERED GOAL SEARCH");
        };
        const goalSearch = [{
            calories: this.state.calories,
            cabs: this.state.cabs,
            protein: this.state.protein,
            fat: this.state.fat,
            sodium: this.state.sodium
        }];
        api.getDashboardWithGoal(this.props.user.id, goalSearch, goalResult);
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
                                                <input type="number" onChange={(e) => this.changeEnergy(e)} value={this.state.calories} class="form-control" id="carbs" placeholder="Kilojoules" min="0"></input>
                                            </div>
                                            <div style={{ float: "left", width: "20%", paddingLeft: "20px", paddingRight: "20px" }}>
                                                <label for="carbs" style={{ fontWeight: "normal", fontSize: "small" }}>Carbohydrates (g)</label>
                                                <input type="number" onChange={(e) => this.changeCarbs(e)} value={this.state.cabs} class="form-control" id="carbs" placeholder="Carbohydrates" min="0"></input>
                                            </div>
                                            <div style={{ float: "left", width: "20%", paddingLeft: "20px", paddingRight: "20px" }}>
                                                <label for="carbs" style={{ fontWeight: "normal", fontSize: "small" }}>Protein (g)</label>
                                                <input type="number" onChange={(e) => this.changeProtein(e)} value={this.state.protein} class="form-control" id="carbs" placeholder="Protein" min="0"></input>
                                            </div>
                                            <div style={{ float: "left", width: "20%", paddingLeft: "20px", paddingRight: "20px" }}>
                                                <label for="carbs" style={{ fontWeight: "normal", fontSize: "small" }}>Fats (g)</label>
                                                <input type="number" onChange={(e) => this.changeFats(e)} value={this.state.fat} class="form-control" id="carbs" placeholder="Fats" min="0"></input>
                                            </div>
                                            <div style={{ float: "left", width: "20%", paddingLeft: "20px", paddingRight: "20px" }}>
                                                <label for="carbs" style={{ fontWeight: "normal", fontSize: "small" }}>Sodium (g)</label>
                                                <input type="number" onChange={(e) => this.changeSodium(e)} value={this.state.sodium} class="form-control" id="carbs" placeholder="Sodium" min="0"></input>
                                            </div>
                                        </div> :
                                        <div style={{ margin: "13px", marginLeft: "20px" }}>
                                            <button class={(this.state.goal == constants.mealPlanner.LOSE_WEIGHT) ? "btn btn-success" : "btn btn-default"}
                                                onClick={(e) => this.setGoal(e, constants.mealPlanner.LOSE_WEIGHT)} style={{ width: "260px" }}>Lose Weight</button>
                                            <button class={(this.state.goal == constants.mealPlanner.GAIN_MUSCLE) ? "btn btn-success" : "btn btn-default"}
                                                onClick={(e) => this.setGoal(e, constants.mealPlanner.GAIN_MUSCLE)} style={{ width: "260px" }}>Gain Muscle</button>
                                            <button class={(this.state.goal == constants.mealPlanner.SLIMMING) ? "btn btn-success" : "btn btn-default"}
                                                onClick={(e) => this.setGoal(e, constants.mealPlanner.SLIMMING)} style={{ width: "260px" }}>Slimming</button>
                                            <button class={(this.state.goal == constants.mealPlanner.STAMINA_TRAINING) ? "btn btn-success" : "btn btn-default"}
                                                onClick={(e) => this.setGoal(e, constants.mealPlanner.STAMINA_TRAINING)} style={{ width: "260px" }}>Stamina Training</button>
                                            <button class={(this.state.goal == constants.mealPlanner.GENERAL_FITNESS) ? "btn btn-success" : "btn btn-default"}
                                                onClick={(e) => this.setGoal(e, constants.mealPlanner.GENERAL_FITNESS)} style={{ width: "260px" }}>General Fitness</button>
                                        </div>
                                    }
                                    <button class={(this.state.option) ? "btn btn-secondary" : "btn btn-default"} onClick={(e) => this.swapButton(e, true)} style={{ float: "left", marginTop: "15px", marginLeft: "20px" }}>Macro Limits</button>
                                    <button class={(this.state.option) ? "btn btn-default" : "btn btn-secondary"} onClick={(e) => this.swapButton(e, false)} style={{ float: "left", marginTop: "15px", marginLeft: "20px" }}>Goal Options</button>
                                    <div style={{ float: "right", marginTop: "15px", marginRight: "20px" }}>
                                        <button class="btn btn-default" onClick={(e) => this.onGoalSearch(e)} type="submit">Advanced Search</button>
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
                                    return <span class="label label-success" style={{marginLeft: "10px"}}>{constants.mealPlanner.macroNutrients[index] + ": < " + tag}{(index == 0) ? " kCal" : " g"}</span>
                                }
                            }) :
                            this.state.tags.map((tag) => {
                                return <span class="label label-success" style={{marginLeft: "10px"}}>{tag}</span>
                            })
                    }
                </div>
                <br></br>
                <div class="list-group">
                    {this.state.recipes.map((recipe) => {
                        return (
                            <Link to={"../../recipe/" + recipe.id} class="list-group-item list-group-item-action recipe_btn">
                                <img src={"../../" + recipe.images.split(",")[0]} alt="Avatar" class="dash_img" style={{ marginLeft: "5px", width: "150px", height: "150px", float: "left" }}></img>
                                <div class="recipe_btn_content">
                                    <h4 style={{ display: "inline" }}>{recipe.name + " "}</h4>
                                    {/* <div style={{ display: "inline", fontSize: "14px" }}>by {this.props.users.find(x => x.id == recipe.creator).username}</div> */}
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
                                                <tr>{
                                                        constants.mealPlanner.smallMacros.map((nutrient) => {
                                                            return <td class="macro_col">{recipe[nutrient]}</td>
                                                        })
                                                    }
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
