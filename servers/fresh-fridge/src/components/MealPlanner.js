import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import recipe from './images/recipe.jpg';
import { isNull } from 'util';

const recipeInfo = [
    {
        id: 100,
        name: 'Popeyetoast with eggs',
        img: 'images/recipe.jpg',
        macros: {
            Intake: 10,
            Carbs: 20,
            Protein: 30,
            Fats: 40,
            Sodium: 50
        }
    },
    {
        id: 200,
        name: 'Pistachio and figs cake',
        img: 'images/cake.jpg',
        macros: {
            Intake: 10,
            Carbs: 20,
            Protein: 30,
            Fats: 40,
            Sodium: 50
        }
    },
    {
        id: 300,
        name: 'Toasted stacked foccacia sandwich',
        img: 'images/sandwich.jpg',
        macros: {
            Intake: 10,
            Carbs: 20,
            Protein: 30,
            Fats: 40,
            Sodium: 50
        }
    },
    {
        id: 400,
        name: 'Muscle and chives paella',
        img: 'images/paella.jpg',
        macros: {
            Intake: 10,
            Carbs: 20,
            Protein: 30,
            Fats: 40,
            Sodium: 50
        }
    },
    {
        id: 500,
        name: 'Banana pudding with caramel sauce',
        img: 'images/pudding.png',
        macros: {
            Intake: 10,
            Carbs: 20,
            Protein: 30,
            Fats: 40,
            Sodium: 50
        }
    }
];

class MealPlanner extends React.Component {
    constructor(props){
        super(props)
        this.dragOut = true;
        this.dragOutNum = null;
        this.state = {
            name: "Bodybuilding plan (PART A)",
            dailyMeals : [
                [null, null, null],
                [100, null, 400],
                [null, 200, null],
                [null, 200, null],
                [400, null, 500],
                [null, null, null],
                [null, null, 100]
            ]
        }
    }

    onDragStart = (e,v) =>{
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text/plain", v);
    }

    onDragEnd = (e, v) => {
        e.preventDefault();
        if (this.dragOut || (!this.dragOut && !(this.dragOutNum[0] == v[0] && this.dragOutNum[1] == v[1]))) {
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
        return recipeInfo.find(x => x.id == id);
    }

    calculateNutrient = (day, nutrient) => {
        let nutrientValue = 0;
        day.forEach(slot => {
            nutrientValue += !isNull(slot) ? this.getRecipe(slot).macros[nutrient] : 0; 
        });
        return nutrientValue;
    }

    cancel = () => {
        console.log("Cancelled");
    }

    editPlanner = () => {
        console.log("Finish Edit");
    }

    render() {
        const { name, dailyMeals } = this.state;

        return (
            <div class="body_container">
                <h4>Edit Meal Plan</h4>
                <div class="form-group mealPlannerForm">
                    <input type="text" class="form-control mealPlannerTitle" value={ name } placeholder="Title"></input>
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
                                            console.log(day[mealKey]);
                                            return <td style={bg_img(this.getRecipe(day[mealKey]).img)} class="planner_img"
                                                        draggable="true" onDragStart={ (e) => this.onDragStart(e, day[mealKey])}
                                                        onDragEnd={ (e) => this.onDragEnd(e, [dayKey, mealKey])}
                                                        onDragOver={this.allowDrop} onDrop={(e) => this.onDrop(e, [dayKey, mealKey])}>
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
                                    let macroHead = (nutrient == 'Intake') ? <th scope="row" rowspan="5"><div class="vertical macroDiv">MACROS</div></th> : null;
                                    let measure = (nutrient == 'Intake') ? 'kj' : 'g';
                                    let timeSlots = dailyMeals.map(day => {
                                        return <td class="macro_img">
                                                    <div class="macroLeft">{ nutrient }</div>
                                                    <div class="macroRight">{ this.calculateNutrient(day, nutrient) } { measure }</div>
                                                </td>
                                    })
                                    return <tr>{ macroHead }{ timeSlots }</tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
        
                <div class="dropArea">
                    <div class="panel panel-default">
                        <div class="panel-heading">Recipes</div>
                        <div class="panel-body pre-scrollable dropPanel">
                            <div class="list-group">
                                {
                                    recipeInfo.map(recipe => {
                                        return <div class="list-group-item list-group-item-action planner_img_wrapper">
                                                    <div class="planner_img" draggable="true" style={ bg_img(recipe.img) } onDragStart={ (e) => this.onDragStart(e, recipe.id) }></div>
                                                </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class="macroRight">
                        <button onClick={ this.editPlanner() } class="btn btn-success editSubmit">Edit</button>
                        <button onClick={ this.cancel() } class="btn btn-secondary editCancel">Cancel</button>
                    </div>
                </div>
            </div>
          )
    }

}

export default MealPlanner;