import constants from "../../constants";

export const mapStateToProps = state => {
  const { mealPlans, modalPlan } =state.mealPlan
  return {
    mealPlans,
    modalPlan
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    changeModal: (e, plan) => {
      e.preventDefault();
      dispatch({type: constants.meallist.SHOW_DEL_MODAL, plan});
    },

    deletePlan: (e, planId) => {
      e.preventDefault();
      let mealPlans = this.props.mealPlans;
      mealPlans.splice(mealPlans.indexOf(mealPlans.find(x => x.id === planId)), 1);
      this.props.deletePlan(mealPlans);
      this.setState({ mealPlans });
    }
  };
};