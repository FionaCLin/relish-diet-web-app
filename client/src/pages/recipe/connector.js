import constants from '../../constants';
import {getUOM} from '../../reducers/recipe.js';
import {getRecipeById} from '../../reducers/recipe.js';
import {useParams} from 'react-router-dom';

export const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps);
  const {loading, selectedRecipe} = state.recipe;
  return {
    error: state.user.error,
    loading: loading || !selectedRecipe,
    recipe: selectedRecipe,
    canBookmarked: state.user.profile.id !== selectedRecipe.memberId,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};
