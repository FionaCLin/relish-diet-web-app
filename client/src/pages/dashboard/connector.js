import constants from "../../constants";
import {getDashboardRecipes} from '../../reducers/dashboard.js';
import {getRecipeById} from '../../reducers/recipe.js';

export const mapStateToProps = (state) => {
  const { recipesList, loading } = state.dashboard
  console.log(recipesList)
  return {
    recipesList,
    loading
  }
};

export const mapDispatchToProps = async (dispatch) => {
  await dispatch(getDashboardRecipes);
  return {
    onRecipeClick(e, id) {
    }
  };
};