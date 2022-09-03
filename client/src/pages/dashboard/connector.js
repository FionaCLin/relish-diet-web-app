import constants from '../../constants';
import {getDashboardRecipes} from '../../reducers/dashboard.js';
import {getRecipeById} from '../../reducers/recipe.js';

export const mapStateToProps = (state) => {
  const {recipesList, loading} = state.dashboard;
  return {
    recipesList,
    loading,
  };
};

export const mapDispatchToProps = (dispatch) => {
  dispatch(getDashboardRecipes);
  return {
    onRecipeClick: async (navigate, id) => {
      try {
        const {status = null}  = await dispatch(getRecipeById(id));
        if (status === 200) {
          navigate(`/recipe/${id}`);
        }
      } catch (e) {
        console.error(e.message);
      }
    },
  };
};