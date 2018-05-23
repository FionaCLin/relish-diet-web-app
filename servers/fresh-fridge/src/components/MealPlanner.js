import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import recipe from './images/recipe.jpg';
import { isNull } from 'util';

const goal = [1, 2, 3, 4, 5];

class MealPlanner extends React.Component {
    constructor(props){
        super(props)
        this.dragOut = true;
        this.dragOutNum = null;
        this.state = {
            showMacro: null,
            currRecipes: constants.mealPlanner.PERSONAL,
            name: "Bodybuilding plan (PART A)",
            dailyMeals : [
                [null, null, null],
                [100, null, 400],
                [null, 200, null],
                [null, 200, null],
                [400, null, 500],
                [null, null, null],
                [null, null, 100]
            ],
            macros: {
                Intake: 0,
                Carbs: 0,
                Protein: 0,
                Fats: 0,
                Sodium: 0
            }
        }
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
        console.log(v);
    }

    getRecipe = (id) => {
        console.log(this.props.recipeInfo);
        return this.props.recipeInfo.find(x => x.id === id);
    }

    calculateNutrient = (day, nutrient) => {
        let nutrientValue = 0;
        day.forEach(slot => {
            nutrientValue += !isNull(slot) ? this.getRecipe(slot).macros[nutrient] : 0; 
        });
        return nutrientValue;
    }

    getMeasurement = (nutrient) => {
        return ((nutrient === 'Intake') ? 'kCal' : 'g');
    }

    cancel = (e) => {
        e.preventDefault();
        console.log("Cancelled");
    }

    editPlanner = (e) => {
        e.preventDefault();
        console.log("Finish Edit");
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
        this.state.dailyMeals.map((day) => {
            overallNutrient += this.calculateNutrient(day, nutrient);
        })
        this.state.macros[nutrient] = overallNutrient;
        return overallNutrient;
    }

    changeName = (e) => {
        e.preventDefault();
        let { name } = this.state;
        name = e.target.value;
        this.setState({name});
        console.log(name);
    }

    render() {
        const { showMacro, currRecipes, name, dailyMeals } = this.state;

        return (
            <div class="body_container">
                <div class="form-group mealPlannerForm">
                        <div class="mealPlanHeader">
                        <h4>Edit Meal Plan</h4>
                        <input type="text" class="form-control mealPlannerTitle" onChange={(e) => this.changeName(e)} value={ name } placeholder="Title"></input>
                        </div>
                        <div class="panel panel-default overallPlannerMacros" style={{marginTop:10}}>
                            <table class="table table-sm table-bordered table-striped" style={{textAlign: 'center'}}>
                                <tbody>
                                    <tr class="overallMacroRow">
                                        <td class="overallMacroRow"></td>
                                        <td class="overallMacroRow">Intake (kJ)</td>
                                        <td class="overallMacroRow">Carbs (g)</td>
                                        <td class="overallMacroRow">Protein (g)</td>
                                        <td class="overallMacroRow">Fats (g)</td>
                                        <td class="overallMacroRow">Sodium (g)</td>
                                    </tr>
                                    <tr class="overallMacroRow">
                                        <td class="overallMacroRow" style={{textAlign: 'left'}}>Goal</td>
                                        {
                                            goal.map((item) => {
                                                return <td class="macro_col overallMacroRow">{ item }</td>
                                            })
                                        }
                                    </tr>
                                    <tr class="overallMacroRow">
                                        <td class="overallMacroRow">Current</td>
                                        {
                                            constants.mealPlanner.macroNutrients.map((nutrient) => {
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
                                            return <td style={bg_img(this.getRecipe(day[mealKey]).img)} class="planner_img"
                                                        draggable="true" onDragStart={ (e) => this.onDragStart(e, day[mealKey])}
                                                        onDragEnd={ (e) => this.onDragEnd(e, [dayKey, mealKey])}
                                                        onDragOver={this.allowDrop} onDrop={(e) => this.onDrop(e, [dayKey, mealKey])}>
                                                        <div class="drop_img_wrapper">
                                                            <div class="overlay">
                                                                <div class="planner_img_text">{this.getRecipe(day[mealKey]).name}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    
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
                                constants.mealPlanner.macroNutrients.map((nutrient) => {
                                    let macroHead = (nutrient === 'Intake') ? <th scope="row" rowspan="5"><div class="vertical macroDiv">MACROS</div></th> : null;
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
        
                <div style={{float:"right"}}>
                    <div style={{float:"left"}} class="dropArea">
                        <div class="panel panel-default">
                            <div class="panel-heading">Recipes</div>
                            <div class="panel-body pre-scrollable dropPanel">
                                <div class="list-group">
                                    {
                                        ((currRecipes === constants.mealPlanner.PERSONAL) ?
                                            this.props.recipeInfo.map(recipe => {
                                                let macros = constants.mealPlanner.macroNutrients.map(nutrient => {
                                                    return <tr><td style={{float:'left',width:75}}>{nutrient}</td><td style={{float:'left',width:75}}>{recipe.macros[nutrient]} {this.getMeasurement(nutrient)}</td></tr>
                                                })
                                                return <div class="list-group-item list-group-item-action planner_img_wrapper">
                                                            <div class="macroInfo btn-xs btn-default" onMouseEnter={ (e) => this.macroOver(e, recipe.id) } onMouseLeave={(e) => this.macroOut(e)}><span class="glyphicon glyphicon-signal" aria-hidden="true" ></span></div>
                                                            <div class="planner_img" draggable="true" style={ bg_img(recipe.img) } onDragStart={ (e) => this.onDragStart(e, recipe.id) }></div>
                                                            <div class="overlay">
                                                                <div class="planner_img_text" centred>
                                                                    { (showMacro === recipe.id) ? <table>{macros}</table> : recipe.name } 
                                                                </div>
                                                            </div>
                                                        </div>
                                            })
                                        : ((currRecipes === constants.mealPlanner.BOOKMARKED) ? constants.mealPlanner.BOOKMARKED : constants.mealPlanner.RECOMMENDED))
                                    }
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="macroRight">
                            <button onClick={ (e) => this.editPlanner(e) } class="btn btn-success editSubmit">Edit</button>
                            <button onClick={ (e) => this.cancel(e) } class="btn btn-secondary editCancel">Cancel</button>
                        </div>
                    </div>
                    <div style={{float:"left", width: 20}}>
                        {
                            constants.mealPlanner.recipeList.map((item) => {
                                return <button class={(currRecipes === item.recipes) ? "btn sideButton btn-success" : "btn sideButton btn-default" } title={item.title} onClick={(e)=>this.changeRecipe(e, item.recipes)}><span class={item.class} aria-hidden="true"></span></button>
                            })
                        }
                    </div>
                </div>
            </div>
          )
    }

}

export default MealPlanner;