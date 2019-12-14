import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import recipe from './images/recipe.jpg';
import { isNull, isUndefined } from 'util';
import Link from 'react-router-dom/Link';
import api from '../api.js';

class MealPlanner extends React.Component {
    constructor(props) {
        super(props)
        this.dragOut = true;
        this.dragOutNum = null;
        
        this.state = {
            userID: this.props.match.params.userID,
            bookmarks: [],
            personal: [],
            recommended: [],
            showMacro: null,
            currRecipes: constants.mealPlanner.PERSONAL,
            name: '',
            dailyMeals : [],
            sodium: '',
            fat: '',
            cabs: '',
            protein: '',
            calories: '',
            currRecipe: null,
            goal: (this.props.match.params.mode === constants.mealPlanner.ADD_MEAL_PLANNER) ? this.generateGoal() : []
        }
    }

    componentWillMount () {
        this.setRecipes();
        let currPlan = null;
        if (this.props.match.params.mode !== constants.mealPlanner.ADD_MEAL_PLANNER) {
            let editState = (result) => {

                let dailyMeals = constants.mealPlanner.defaultPlan.dailyMeals;
                result.timeslots.forEach((slot) => {
                    let day = constants.mealPlanner.daysOfWeek.indexOf(slot.day) - 1;
                    let meal = constants.mealPlanner.mealOptions.indexOf(slot.meal_type);
                    dailyMeals[day][meal] = slot.recipe_id;
                });

                this.setState({
                    name: result.title,
                    dailyMeals : dailyMeals,
                    calories: result.calories,
                    cabs: result.cabs,
                    fat: result.fat,
                    protein: result.protein,
                    sodium: result.sodium
                });

                console.log(dailyMeals);
            };
            api.getMealPlan(this.props.match.params.id, editState);
        } else {
            currPlan = constants.mealPlanner.defaultPlan;
            this.setState({
                name: currPlan.title,
                dailyMeals: currPlan.dailyMeals,
                calories: currPlan.calories,
                cabs: currPlan.cabs,
                fat: currPlan.fat,
                protein: currPlan.protein,
                sodium: currPlan.sodium
            })
        }
    }

    setRecipes = () => {
        api.getBookmarks(this.state.userID, (result) => {
            let recipes = [];
            result.map((bookmark) => recipes.push(bookmark.recipe));
            this.setState({bookmarks: recipes});
        });
        api.getPersonal(this.state.userID, (personal) => {this.setState({personal})});
        if (this.props.match.params.mode === constants.mealPlanner.ADD_MEAL_PLANNER) {
        api.getDashboardWithGoal(this.state.userID, [constants.mealPlanner.sortDiet[constants.mealPlanner.goalOptions[this.props.match.params.id]]],
            (recommended) => {this.setState({recommended})});
        }
    }

    generateGoal = () => {
        return constants.mealPlanner.sortPlan[parseInt(this.props.match.params.id, 10)];
    }

    onDragStart = (e,v) =>{
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text/plain", v);
    }

    onDragEnd = (e, v) => {
        e.preventDefault();
        if (this.dragOut || (!this.dragOut && !(this.dragOutNum[0] === v[0] && this.dragOutNum[1] === v[1]))) {
            let { dailyMeals } = this.state;
            dailyMeals[v[0]][v[1]] = null;
            this.setState({ dailyMeals });
        }
        this.dragOut = true;
        this.dragOutNum = null;
    }
    
    allowDrop = ev =>{
        ev.preventDefault();
    }
    
    onDrop = (e,v) => {
        e.preventDefault();
        this.dragOut = false;
        this.dragOutNum = v;
        const data = e.dataTransfer.getData("text/plain");
        let { dailyMeals } = this.state;
        dailyMeals[v[0]][v[1]] = parseInt(data, 10);
        this.setState({ dailyMeals });
    }

    getRecipe = (id) => {
        let recipe = undefined;
        recipe = this.state.personal.find(x => x.id === id);
        if (isUndefined(recipe)) recipe = this.state.bookmarks.find(x => x.id === id);
        if (isUndefined(recipe) && (this.props.match.params.mode === constants.mealPlanner.ADD_MEAL_PLANNER)) {
            recipe = this.state.recommended.find(x => x.id === id);
        }
        return recipe;
    }

    calculateNutrient = (day, nutrient) => {
        let nutrientValue = 0;
        day.forEach(slot => {
            if (!isNull(slot)) {
                nutrientValue += !(isUndefined(this.getRecipe(slot))) ? this.getRecipe(slot)[nutrient] : 0;
            }
        });
        return Math.round(nutrientValue);
    }

    getMeasurement = (nutrient) => {
        return ((nutrient === 'calories') ? 'kCal' : 'g');
    }

    macroOver = (e, id) => {
        e.preventDefault();
        let { showMacro } = this.state;
        showMacro = id;
        this.setState({showMacro});
    }

    macroOut = (e) => {
        e.preventDefault();
        let { showMacro } = this.state;
        showMacro = null;
        this.setState({ showMacro });
    }

    changeRecipe = (e, recipe) => {
        e.preventDefault();
        let {currRecipes} = this.state;
        currRecipes = recipe;
        this.setState({currRecipes});
    }

    calculateOverall = (nutrient) => {
        let overallNutrient = 0;
        console.log("OVERALL", this.state.dailyMeals);
        this.state.dailyMeals.forEach((day) => {
            overallNutrient += this.calculateNutrient(day, nutrient);
        })
        this.state[nutrient] = overallNutrient;
        return overallNutrient;
    }

    changeName = (e) => {
        e.preventDefault();
        let { name } = this.state;
        name = e.target.value;
        this.setState({name});
    }

    removeRecipe = (meal, day) => {
        this.state.dailyMeals[meal][day] = null;
    }

    validationCheck = () => {
        return (this.state.name !== '' && this.state.dailyMeals == constants.mealPlanner.defaultPlan.dailyMeals);
    }

    editPlan = (e) => {
        if (this.validationCheck()) {
            e.preventDefault();
            let plan = {
                title: this.state.name,
                user_id: this.setState.userID,
                sodium: this.state.sodium,
                fat: this.state.fat,
                calories: this.state.calories,
                cabs: this.state.cabs,
                protein: this.state.protein,
                timeslots: this.getTimeSlots()
            };

            if (this.props.match.params.mode !== constants.mealPlanner.ADD_MEAL_PLANNER) {
                api.editMealPlan(this.props.match.params.id, plan);
            } else {
                api.addMealPlan(plan);
            }
        }
    }

    getTimeSlots = (e) => {
        let timeslots = [];
        constants.mealPlanner.daysOfWeek.forEach((day, dayIndex) => {
            if (day == '\xa0\xa0\xa0') return;
            constants.mealPlanner.mealOptions.forEach((mealTime, mealIndex) => {
                if (!isNull(this.state.dailyMeals[dayIndex - 1][mealIndex])) {
                    let timeslot = {
                        day: day,
                        meal_type: mealTime,
                        recipe_id: this.state.dailyMeals[dayIndex - 1][mealIndex]
                    };
                    timeslots.push(timeslot);
                }
            });
        });
        return timeslots;
    }

    changeCurrRecipe = (e, recipeId) => {
        e.preventDefault();
        api.getRecipe(recipeId, (currRecipe) => {
            console.log(currRecipe);
            let ingredients = [];
            currRecipe.ingredients.forEach((ingredient) => {
                ingredients.push(ingredient.amount + " " + ingredient.uom + " of " + ingredient.name);
            })
            currRecipe.ingredients = ingredients;
            this.setState({currRecipe});
        });
    }

    render() {
        const { showMacro, currRecipes, name, dailyMeals } = this.state;
        let recipeList = (currRecipes === constants.mealPlanner.PERSONAL) ? this.state.personal :
                            ((currRecipes === constants.mealPlanner.BOOKMARKED) ? this.state.bookmarks : this.state.recommended);

        return (
            <div class="body_container">
                <div class="form-group mealPlannerForm">
                        <div class="mealPlanHeader">
                        { (this.props.match.params.mode === constants.mealPlanner.VIEW_MEAL_PLANNER) ?
                            <h4 style={{marginTop:"30px"}}>{ name }</h4> :
                            <div>
                                <h4>{(this.props.match.params.mode === constants.mealPlanner.ADD_MEAL_PLANNER) ? "New" : "Edit"} Meal Plan</h4>
                                <input type="text" class="form-control mealPlannerTitle" onChange={(e) => this.changeName(e)} value={ name } placeholder="Title"></input>
                            </div>
                        }
                        </div>
                        <div class="panel panel-default overallPlannerMacros"
                                style={{marginTop: ((this.props.match.params.mode === constants.mealPlanner.EDIT_MEAL_PLANNER) ? "40px" : "10px"),
                                        marginRight: ((this.props.match.params.mode === constants.mealPlanner.VIEW_MEAL_PLANNER) ? "0px" : "")}}>
                            <table class="table table-sm table-bordered table-striped" style={{textAlign: 'center'}}>
                                <tbody>
                                    <tr class="overallMacroRow">
                                        <td class="overallMacroRow"></td>
                                        <td class="overallMacroRow">Energy (kCal)</td>
                                        <td class="overallMacroRow">Carbs (g)</td>
                                        <td class="overallMacroRow">Protein (g)</td>
                                        <td class="overallMacroRow">Fats (g)</td>
                                        <td class="overallMacroRow">Sodium (g)</td>
                                    </tr>
                                    { (this.props.match.params.mode === constants.mealPlanner.ADD_MEAL_PLANNER) ?
                                        <tr class="overallMacroRow">
                                            <td class="overallMacroRow" style={{textAlign: 'left'}}>Goal</td>
                                            {
                                                this.state.goal.map((item) => {
                                                    return <td class="macro_col overallMacroRow">{ item }</td>
                                                })
                                            }
                                        </tr> : null
                                    }
                                    <tr class="overallMacroRow">
                                        <td class="overallMacroRow">Current</td>
                                        {
                                            constants.mealPlanner.smallMacros.map((nutrient) => {
                                                return <td class="macro_col overallMacroRow">{ this.calculateOverall(nutrient) }</td>
                                            })
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
                <p></p>
                <div class="macroLeft">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                {
                                    constants.mealPlanner.daysOfWeek.map((item) => {
                                        return <th scope="col" class="mealPlannerDays">{item}</th>
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                constants.mealPlanner.mealTimes.map((time, mealKey) => {
                                    let timeSlots = dailyMeals.map((day, dayKey) => {
                                        if (!isNull(day[mealKey])) {
                                            if (!isUndefined(this.getRecipe(day[mealKey]))) {
                                                return <td style={bg_img(this.getRecipe(day[mealKey]).images.split(",")[0])} class="planner_img"
                                                            draggable={(this.props.match.params.mode !== constants.mealPlanner.VIEW_MEAL_PLANNER) ? "true": "false"}
                                                            onClick={(this.props.match.params.mode === constants.mealPlanner.VIEW_MEAL_PLANNER) ?
                                                                (e) => this.changeCurrRecipe(e, day[mealKey]) : ""}
                                                            onDragStart={ (e) => this.onDragStart(e, day[mealKey])}
                                                            onDragEnd={ (e) => this.onDragEnd(e, [dayKey, mealKey])}
                                                            onDragOver={this.allowDrop} onDrop={(e) => this.onDrop(e, [dayKey, mealKey])}>
                                                            <div class="drop_img_wrapper">
                                                                <div class="overlay">
                                                                    <div class="planner_img_text">{this.getRecipe(day[mealKey]).name}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                            } else {
                                                this.removeRecipe(mealKey, dayKey);
                                            }    
                                        } else {
                                            return <td class="planner_img"  onDragOver={this.allowDrop} onDrop={(e) => this.onDrop(e, [dayKey, mealKey])}></td>
                                        }
                                    });
                                    return <tr>
                                        <th scope="row"><div class="vertical">{time}</div></th>
                                        { timeSlots }
                                    </tr>
                                })
                            }
                            {
                                constants.mealPlanner.smallMacros.map((nutrient) => {
                                    let macroHead = (nutrient === 'calories') ? <th scope="row" rowspan="5"><div class="vertical macroDiv">MACROS</div></th> : null;
                                    let timeSlots = dailyMeals.map(day => {
                                        return <td class="macro_img">
                                                    <div class="macroLeft">{ nutrient }</div>
                                                    <div class="macroRight">{ this.calculateNutrient(day, nutrient) } { this.getMeasurement(nutrient) }</div>
                                                </td>
                                    })
                                    return <tr>{ macroHead }{ timeSlots }</tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
        
                { (this.props.match.params.mode !== constants.mealPlanner.VIEW_MEAL_PLANNER) ?
                    <div style={{float:"right"}}>
                        <div style={{float:"left"}} class="dropArea">
                            <div class="panel panel-default">
                                <div class="panel-heading">Recipes</div>
                                <div class="panel-body pre-scrollable dropPanel">
                                    <div class="list-group">
                                        {
                                            recipeList.map(recipe => {
                                                let macros = constants.mealPlanner.smallMacros.map(nutrient => {
                                                    return <tr><td style={{float:'left',width:75}}>{nutrient}</td><td style={{float:'left',width:75}}>{Math.round(recipe[nutrient])} {this.getMeasurement(nutrient)}</td></tr>
                                                })
                                                return <div class="list-group-item list-group-item-action planner_img_wrapper">
                                                            <div class="macroInfo btn-xs btn-default" onMouseEnter={ (e) => this.macroOver(e, recipe.id) } onMouseLeave={(e) => this.macroOut(e)}><span class="glyphicon glyphicon-signal" aria-hidden="true" ></span></div>
                                                            <div class="planner_img" draggable="true" style={ bg_img(recipe.images.split(",")[0]) } onDragStart={ (e) => this.onDragStart(e, recipe.id) }></div>
                                                            <div class="overlay">
                                                                <div class="planner_img_text" centred>
                                                                    { (showMacro === recipe.id) ? <table>{macros}</table> : recipe.name } 
                                                                </div>
                                                            </div>
                                                        </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div class="macroRight">
                                <button onClick={ (e) => this.editPlan(e) } class="btn btn-success editSubmit">
                                    <Link to="/meallist">{ (this.props.match.params.mode === constants.mealPlanner.EDIT_MEAL_PLANNER) ? "Edit" : "Create"}</Link>
                                </button>
                                <Link to="/meallist"><button class="btn btn-secondary editCancel">Cancel</button></Link>
                            </div>
                        </div>
                        <div style={{float:"left", width: 20}}>
                            {
                                constants.mealPlanner.recipeList.map((item) => {
                                    if (this.props.match.params.mode == constants.mealPlanner.EDIT_MEAL_PLANNER && item.recipes === constants.mealPlanner.RECOMMENDED) {
                                        return null;
                                    } else {
                                        return <button class={(currRecipes === item.recipes) ? "btn sideButton btn-success" : "btn sideButton btn-default" } title={item.title} onClick={(e)=>this.changeRecipe(e, item.recipes)}><span class={item.class} aria-hidden="true"></span></button>
                                    }
                                })
                            }
                        </div>
                    </div> :
                    <div style={{width:"330px",float:"right"}}>
                        <div class="panel panel-default">
                            <div class="panel-heading">View Recipe</div>
                            <div class="panel-body pre-scrollable list-group" style={{height:"651px"}}>
                                <div class="list-group">
                                    { (!isNull(this.state.currRecipe)) ?
                                    <div class="list-group-item list-group-item-action">
                                        <h4>{ this.state.currRecipe.name }</h4>
                                        <br></br>
                                        <div class="panel panel-default">
                                            <table class="table table-bordered table-striped" style={{textAlign:"center",fontSize:"small"}}>
                                                <thead><tr>
                                                    <td>Sum (kJ)</td>
                                                    <td>Carbs (g)</td>
                                                    <td>Prot (g)</td>
                                                    <td>Fats (g)</td>
                                                    <td>Sodm (g)</td>
                                                </tr></thead>
                                                <tbody><tr>
                                                    {
                                                        constants.mealPlanner.smallMacros.map((nutrient) => {
                                                            return <td class="macro_col">{ this.state.currRecipe[nutrient] }</td>
                                                        })
                                                    }
                                                </tr></tbody>
                                            </table>
                                        </div>
                                        <table class="table table-striped"><tbody>
                                            <tr><td>Ingredients</td></tr>
                                            <tr><td>
                                            <div class="form-check">
                                                {
                                                    this.state.currRecipe.ingredients.map((ingredient) => {
                                                        return <div>
                                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                                                    <label class="form-check-label" for="defaultCheck1" style={{fontWeight:"normal"}}>
                                                                    {ingredient}
                                                                    </label>
                                                                    <br></br>
                                                                </div>
                                                    })
                                                }
                                            </div>
                                            </td></tr>
                                        </tbody></table>
                                    <table class="table table-striped">
                                        <tbody>
                                        <tr><td>Method</td></tr>
                                        <tr><td>
                                        <ol>
                                        {
                                            this.state.currRecipe.method.split("\n").map((step) => {
                                                return <li>{step}</li>
                                            })
                                        }
                                        </ol>
                                        </td></tr>
                                        </tbody>
                                    </table>
                                </div> : <div>Click on a recipe to view</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
          )
    }

}

export default MealPlanner;
