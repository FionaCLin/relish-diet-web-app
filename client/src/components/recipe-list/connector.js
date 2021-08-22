export const mapStateToProps = (state) => {
  const {recipeList} = state
  const {recipeInfo, list_type, users, CURR_USER_ID} = recipeList;

  return {
    recipeInfo,
    list_type,
    users,
    curr_user: CURR_USER_ID
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};
