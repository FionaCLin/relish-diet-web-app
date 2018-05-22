import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import recipe from './images/recipe.jpg';

const daysOfWeek = ['\xa0\xa0\xa0', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const macroNutrients = ['Intake', 'Carbs', 'Protein', 'Fats', 'Sodium'];
const mealTImes = ['BREKKIE', '\xa0LUNCH', 'DINNER']

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

const dailyMeals = [
    [null, null, null],
    [100, null, 400],
    [null, 200, null],
    [null, 200, null],
    [400, null, 500],
    [null, null, null],
    [null, null, 100]
]

const MealPlanner = (props) => {
  return (
    <div class="body_container">
        <h4>Edit Meal Plan</h4>
        <div class="form-group mealPlannerForm">
            <input type="text" class="form-control mealPlannerTitle" value="Bodybuilding plan (PART A)" placeholder="Title"></input>
        </div>
        <p></p>
        <div class="macroLeft">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        {
                            daysOfWeek.map((item) => {
                                return <th scope="col" class="mealPlannerDays">{item}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><div class="vertical">BREKKIE</div></th>
                        <td style={ bg_img('./images/recipe.jpg') } class="planner_img"></td>
                        <td class="planner_img"></td>
                        <td class="planner_img"></td>
                        <td class="planner_img"></td>
                        <td style={ bg_img('./images/paella.jpg') } class="planner_img"></td>
                        <td class="planner_img"></td>
                        <td class="planner_img"></td>
                    </tr>
                    <tr>
                    <th scope="row"><div class="vertical">&nbsp;LUNCH</div></th>
                        <td class="planner_img"></td>
                        <td class="planner_img"></td>
                        <td class="planner_img_wrapper">
                        <div style={ bg_img('./images/cake.jpg') } class="planner_img"></div>
                            <div class="overlay">
                                <div class="planner_img_text">Pistachio and figs cake</div>
                            </div>
                        </td>
                        <td style={ bg_img('./images/cake.jpg') } class="planner_img"></td>
                        <td class="planner_img"></td>
                        <td class="planner_img"></td>
                        <td class="planner_img"></td>
                    </tr>
                    <tr>
                    <th scope="row"><div class="vertical">DINNER</div></th>
                        <td class="planner_img"></td>
                        <td style={ bg_img('./images/paella.jpg') } class="planner_img"></td>
                        <td class="planner_img"></td>
                        <td class="planner_img"></td>
                        <td style={ bg_img('./images/pudding.png') } class="planner_img"></td>
                        <td class="planner_img"></td>
                        <td style={ bg_img('./images/recipe.jpg') } class="planner_img"></td>
                    </tr>
                    <tr>
                    <th scope="row" rowspan="5"><div class="vertical macroDiv">MACROS</div></th>
                        <td class="macro_img"><div class="macroLeft">Intake</div><div class="macroRight">1250 kJ</div></td>
                        <td class="macro_img"><div class="macroLeft">Intake</div><div class="macroRight">900 kJ</div></td>
                        <td class="macro_img"><div class="macroLeft">Intake</div><div class="macroRight">1111 kJ</div></td>
                        <td class="macro_img"><div class="macroLeft">Intake</div><div class="macroRight">890 kJ</div></td>
                        <td class="macro_img"><div class="macroLeft">Intake</div><div class="macroRight">991 kJ</div></td>
                        <td class="macro_img"><div class="macroLeft">Intake</div><div class="macroRight">790 kJ</div></td>
                        <td class="macro_img"><div class="macroLeft">Intake</div><div class="macroRight">1002 kJ</div></td>
                    </tr>
                    <tr>
                        <td class="macro_img"><div class="macroLeft">Carbs</div><div class="macroRight">151 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Carbs</div><div class="macroRight">123 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Carbs</div><div class="macroRight">145 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Carbs</div><div class="macroRight">190 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Carbs</div><div class="macroRight">321 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Carbs</div><div class="macroRight">120 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Carbs</div><div class="macroRight">118 g</div></td>
                    </tr>
                    <tr>
                        <td class="macro_img"><div class="macroLeft">Protein</div><div class="macroRight">89 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Protein</div><div class="macroRight">40 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Protein</div><div class="macroRight">67 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Protein</div><div class="macroRight">41 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Protein</div><div class="macroRight">78 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Protein</div><div class="macroRight">76 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Protein</div><div class="macroRight">81 g</div></td>
                    </tr>
                    <tr>
                        <td class="macro_img"><div class="macroLeft">Fats</div><div class="macroRight">32 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Fats</div><div class="macroRight">25 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Fats</div><div class="macroRight">63 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Fats</div><div class="macroRight">22 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Fats</div><div class="macroRight">65 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Fats</div><div class="macroRight">10 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Fats</div><div class="macroRight">21 g</div></td>
                    </tr>
                    <tr>
                        <td class="macro_img"><div class="macroLeft">Sodium</div><div class="macroRight">10 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Sodium</div><div class="macroRight">11 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Sodium</div><div class="macroRight">9 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Sodium</div><div class="macroRight">8 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Sodium</div><div class="macroRight">6 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Sodium</div><div class="macroRight">4 g</div></td>
                        <td class="macro_img"><div class="macroLeft">Sodium</div><div class="macroRight">9 g</div></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="dropArea">
            <div class="panel panel-default">
                <div class="panel-heading">Recipes</div>
                <div class="panel-body pre-scrollable dropPanel">
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action planner_img_wrapper">
                            <div style={ bg_img('./images/recipe.jpg') } class="planner_img"></div>
                            <div class="overlay">
                                <div class="planner_img_text" draggagble>Popeye toast with eggs</div>
                            </div>
                        </div>
                        <div class="list-group-item list-group-item-action planner_img_wrapper">
                            <div style={ bg_img('./images/cake.jpg') } class="planner_img"></div>
                            <div class="overlay">
                                <div class="planner_img_text">Pistachio and figs cake</div>
                            </div>
                        </div>
                        <div class="list-group-item list-group-item-action planner_img_wrapper">
                            <div style={ bg_img('./images/sandwich.jpg') } class="planner_img"></div>
                            <div class="overlay">
                                <div class="planner_img_text">Toasted stacked foccacia sandwich</div>
                            </div>
                        </div>
                        <div class="list-group-item list-group-item-action planner_img_wrapper">
                            <div style={ bg_img('./images/paella.jpg') } class="planner_img"></div>
                            <div class="overlay">
                                <div class="planner_img_text">Muscle and chives paella</div>
                            </div>
                        </div>
                        <div class="list-group-item list-group-item-action planner_img_wrapper">
                            <div style={ bg_img('./images/pudding.png') } class="planner_img"></div>
                            <div class="overlay">
                                <div class="planner_img_text">Banana pudding with caramel sauce</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div class="macroRight">
                <button onclick="location.href='my_planners.html';" class="btn btn-success editSubmit">Edit</button>
                <button onclick="location.href='my_planners.html';" class="btn btn-secondary editCancel">Cancel</button>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanner);