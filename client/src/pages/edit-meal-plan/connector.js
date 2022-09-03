import constants from '../../constants';
import {recipeInfo, users, mealPlans, ingredientList, CURR_USER_ID} from '../../constants/dummyData';

export const mapStateToProps = (state) => {
  const {mealPlans, modalPlan, defaultPlan} = state.mealPlan;
  let currPlan = defaultPlan;
  // mode === constants.mealPlanner.ADD_MEAL_PLANNER
  //   ? constants.mealPlanner.defaultPlan
  //   : constants.mealPlans.find((x) => x.id == id);

  return {
    mealPlans,
    modalPlan,
    mealPlan: {
      bookmarks: recipeInfo.reduce(
        (recipes, recipe) => ([500, 300].includes(recipe.id) ? [...recipes, recipe] : recipes),
        [],
      ),
      personal: recipeInfo.filter((recipe) => recipe.creator === CURR_USER_ID),
      showMacro: null,
      currRecipes: constants.mealPlanner.PERSONAL,
      name: currPlan.name,
      dailyMeals: currPlan.dailyMeals,
      macros: currPlan.macros,
      currRecipe: null,
      recipeInfo,
    },
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrRecipe: (e, recipe) => {
      // todo depatch to state
      let {currRecipe} = this.state;
      currRecipe = recipe;
      this.setState({currRecipe});
    },
    getRecipe: (id) => {
      return recipeInfo.find((x) => x.id === id);
    },
    changeModal: (e, plan) => {
      e.preventDefault();
      dispatch({type: constants.meallist.SHOW_DEL_MODAL, plan});
    },

    deletePlan: (e, planId) => {
      e.preventDefault();
      let mealPlans = this.props.mealPlans;
      mealPlans.splice(mealPlans.indexOf(mealPlans.find((x) => x.id === planId)), 1);
      this.props.deletePlan(mealPlans);
      this.setState({mealPlans});
    },
  };
};
