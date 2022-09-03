import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import mealPlanner from '../../constants/mealPlannerConst';
// import {recipeInfo, users, mealPlans, ingredientList, CURR_USER_ID} from '../../constants/dummyData';
import {connect} from 'react-redux';
import {bg_img} from '../../constants/globalFunctions';
import recipe from '../images/recipe.jpg';
// import Link from 'react-router-dom/Link';
import {useNavigate} from 'react-router-dom';

const goal = [1, 2, 3, 4, 5];
const mode = 'add';
const EditMealPlanner = ({mealPlan, getRecipe}) => {
  // class EditMealPlanner extends React.Component {
  //   constructor(props) {
  //     super(props);
  // this.dragOut = true;
  // this.dragOutNum = null;

  // console.log(mode);
  // }
  // editPlan = (mealPlans) => this.setState({mealPlans});
  const [dragOut, setDragOut] = useState(true);
  const [dragOutNum, setDragOutNum] = useState(null);

  const navigate = useNavigate();
  const onDragStart = (e, v) => {
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData('text/plain', v);
  };

  const onDragEnd = (e, v) => {
    e.preventDefault();
    if (dragOut || (!dragOut && !(dragOutNum[0] === v[0] && dragOutNum[1] === v[1]))) {
      let {dailyMeals} = this.state;
      dailyMeals[v[0]][v[1]] = null;
      this.setState({dailyMeals});
    }
    setDragOut(true);
    setDragOutNum(null);
  };

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (e, v) => {
    e.preventDefault();

    setDragOut(false);
    setDragOutNum(v);

    const data = e.dataTransfer.getData('text/plain');
    let {dailyMeals} = this.state;
    dailyMeals[v[0]][v[1]] = parseInt(data, 10);
    this.setState({dailyMeals});
  };

  const calculateNutrient = (day, nutrient) => {
    return day.reduce((nutrientValue, slot) => {
      if (!slot) return nutrientValue;

      nutrientValue += !getRecipe(slot) ? getRecipe(slot).macros[nutrient] : 0;
      return nutrientValue;
    }, 0);
  };

  const getMeasurement = (nutrient) => (nutrient === 'Energy' ? 'kCal' : 'g');

  const macroOver = (e, id) => {
    e.preventDefault();
    let {showMacro} = this.state;
    showMacro = id;
    this.setState({showMacro});
  };

  const macroOut = (e) => {
    e.preventDefault();
    let {showMacro} = this.state;
    showMacro = null;
    this.setState({showMacro});
  };

  const changeRecipe = (e, recipe) => {
    e.preventDefault();
    let {currRecipes} = this.state;
    currRecipes = recipe;
    this.setState({currRecipes});
  };

  const calculateOverall = (nutrient) => {
    const overallNutrient = mealPlan.dailyMeals.reduce((acc, day) => acc + calculateNutrient(day, nutrient), 0);
    mealPlan.macros[nutrient] = overallNutrient;
    return overallNutrient;
  };

  //   removeRecipe = (meal, day) => {
  //     this.state.dailyMeals[meal][day] = null;
  //   };

  //   editPlan = (e) => {
  //     e.preventDefault();
  //     let plan = {
  //       id: 8,
  //       name: this.state.name,
  //       creator: curr_user,
  //       img: ['images/sandwich.jpg', 'images/recipe.jpg', 'images/pudding.png', 'images/meatball.jpg'],
  //       dailyMeals: this.state.dailyMeals,
  //       macros: this.state.macros,
  //     };

  //     if (mode !== mealPlanner.ADD_MEAL_PLANNER) {
  //       const planIndex = mealPlans.indexOf(mealPlans.find((x) => x.id == id));
  //       mealPlans[planIndex] = plan;
  //     } else {
  //       mealPlans.unshift(plan);
  //     }
  //     this.props.editPlan(mealPlans);
  //     console.log('enter', mealPlans);
  //   };

  const {showMacro, currRecipes, dailyMeals} = mealPlan;
  const [name, setName] = useState(mealPlan.name);

  let recipeList =
    currRecipes === mealPlanner.PERSONAL
      ? mealPlan.personal
      : currRecipes === mealPlanner.BOOKMARKED
      ? mealPlan.bookmarks
      : mealPlan.recipeInfo;

  return (
    // <div className='bg-white'>
    //   <Container className='pt-2 m-auto'>
    <Container className='pt-2 m-auto page-wrapper'>
      <div className='body_container'>
        <div className='form-group mealPlannerForm'>
          <div className='mealPlanHeader'>
            <div>
              <h4>{mode === mealPlanner.ADD_MEAL_PLANNER ? 'New' : 'Edit'} Meal Plan</h4>
              <input
                type='text'
                className='form-control mealPlannerTitle'
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder='Title'
              ></input>
            </div>
          </div>
          <div
            className='panel panel-default overallPlannerMacros'
            style={{
              marginTop: mode === mealPlanner.EDIT_MEAL_PLANNER ? '40px' : '10px',
              marginRight: mode === mealPlanner.VIEW_MEAL_PLANNER ? '0px' : '',
            }}
          >
            <table className='table table-sm table-bordered table-striped' style={{textAlign: 'center'}}>
              <thead>
                <tr className='overallMacroRow'>
                  <th></th>
                  <th>Energy (kJ)</th>
                  <th>Carbs (g)</th>
                  <th>Protein (g)</th>
                  <th>Fats (g)</th>
                  <th>Sodium (g)</th>
                </tr>
              </thead>
              <tbody>
                {mode === mealPlanner.ADD_MEAL_PLANNER && (
                  <tr className='overallMacroRow'>
                    <td style={{textAlign: 'left'}}>Goal</td>
                    {goal.map((item, i) => (
                      <td key={i}>{item}</td>
                    ))}
                  </tr>
                )}
                <tr className='overallMacroRow'>
                  <td>Current</td>
                  {mealPlanner.macroNutrients.map((nutrient, i) => (
                    <td key={i}>{calculateOverall(nutrient)}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {mode !== mealPlanner.VIEW_MEAL_PLANNER && (
          <Row>
            <Col sm='12' md='3' lg='9'>
              <div className='macroLeft'>
              <table className='meal-plan-table table table-bordered'>
                  <thead>
                    <tr>
                      {mealPlanner.daysOfWeek.map((item, i) => (
                        <th scope='col' key={i} className='mealPlannerDays'>
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {mealPlanner.mealTimes.map((time, mealKey) => {
                      let timeSlots = dailyMeals.map((day, dayKey) => {
                        if (!day[mealKey]) {
                          return (
                            <td
                              onDragOver={allowDrop}
                              onDrop={(e) => onDrop(e, [dayKey, mealKey])}
                            ></td>
                          );
                        } else {
                          if (getRecipe(day[mealKey])) {
                            return (
                              <td
                                style={bg_img(getRecipe(day[mealKey]).img[0])}
                                className='planner_img'
                                draggable={mode !== mealPlanner.VIEW_MEAL_PLANNER ? 'true' : 'false'}
                                onClick={
                                  mode === mealPlanner.VIEW_MEAL_PLANNER
                                    ? (e) => changeCurrRecipe(e, getRecipe(day[mealKey]))
                                    : ''
                                }
                                onDragStart={(e) => onDragStart(e, day[mealKey])}
                                onDragEnd={(e) => onDragEnd(e, [dayKey, mealKey])}
                                onDragOver={allowDrop}
                                onDrop={(e) => onDrop(e, [dayKey, mealKey])}
                              >
                                <div className='drop_img_wrapper'>
                                  <div className='overlay'>
                                    <div className='planner_img_text'>{getRecipe(day[mealKey]).name}</div>
                                  </div>
                                </div>
                              </td>
                            );
                          } else {
                            this.removeRecipe(mealKey, dayKey);
                          }
                        }
                      });
                      return (
                        <tr>
                          <th scope='row'>
                            <div className='vertical'>{time}</div>
                          </th>
                          {timeSlots}
                        </tr>
                      );
                    })}
                    {mealPlanner.macroNutrients.map((nutrient, i) => (
                      <tr>
                        {nutrient === 'Energy' && (
                          <th scope='row' key={i} rowSpan='5'>
                            <div className='vertical macroDiv'>MACROS</div>
                          </th>
                        )}
                        {dailyMeals.map((day, i) => (
                          <td className='macro_img' key={i}>
                            <div className='macroLeft'>{nutrient}</div>
                            <div className='macroRight'>
                              {calculateNutrient(day, nutrient)} {getMeasurement(nutrient)}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
            <Col sm='12' md='6' lg='3'>
              <div className='panel panel-default'>
                <div className='panel-heading'>Recipes</div>
                <div className='panel-body pre-scrollable dropPanel'>
                  <div className='recipes-actions'>
                    {mealPlanner.recipeList.map((item) => {
                      if (mode == mealPlanner.EDIT_MEAL_PLANNER && item.recipes === mealPlanner.RECOMMENDED) {
                        return null;
                      } else {
                        return (
                          <button
                            className={
                              currRecipes === item.recipes ? 'btn sideButton btn-success' : 'btn sideButton btn-default'
                            }
                            title={item.title}
                            onClick={(e) => changeRecipe(e, item.recipes)}
                          >
                            <span className={item.class} aria-hidden='true'></span>
                          </button>
                        );
                      }
                    })}
                  </div>
                  <div className='list-group'>
                    {recipeList.map((recipe) => {
                      let macros = mealPlanner.macroNutrients.map((nutrient) => {
                        return (
                          <tr>
                            <td style={{float: 'left', width: 75}}>{nutrient}</td>
                            <td style={{float: 'left', width: 75}}>
                              {recipe.macros[nutrient]} {getMeasurement(nutrient)}
                            </td>
                          </tr>
                        );
                      });
                      return (
                        <div className='list-group-item list-group-item-action planner_img_wrapper'>
                          <div
                            className='macroInfo btn-xs btn-default'
                            onMouseEnter={(e) => macroOver(e, recipe.id)}
                            onMouseLeave={(e) => macroOut(e)}
                          >
                            <span className='glyphicon glyphicon-signal' aria-hidden='true'></span>
                          </div>
                          <div
                            className='planner_img'
                            draggable='true'
                            style={bg_img(recipe.img[0])}
                            onDragStart={(e) => onDragStart(e, recipe.id)}
                          ></div>
                          <div className='overlay'>
                            <div className='planner_img_text' centred>
                              {showMacro === recipe.id ? <table>{macros}</table> : recipe.name}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <br></br>
              <div className='macroRight'>
                <button onClick={(e) => editPlan(e)} className='btn btn-success editSubmit'>
                  {mode === mealPlanner.EDIT_MEAL_PLANNER ? 'Edit' : 'Create'}
                </button>
                <button className='btn btn-secondary editCancel' onClick={(e) => navigate(-1)}>
                  Cancel
                </button>
              </div>
            </Col>
          </Row>
        )}
        {/* </div>
      </Container> */}
      </div>
    </Container>
  );
};

export default EditMealPlanner;
