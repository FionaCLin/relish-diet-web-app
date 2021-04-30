import constants from "../constants";
import { mealPlans } from '../constants/dummyData';

const initialState = {
  mealPlans,
  modalPlan: {
    id: 0,
    name: ''
  }
};

export default function mealList(state = initialState, action) {
  // console.log('reducer running', action);
  switch (action.type) {
    case constants.SHOW_DEL_MODEL:
      console.log(action)
      // return {...state, modalPlan:{
      //   id: 10,
      //   name: 'sss'
      // }}
      // modalPlan = {
      //   id: plan.id,
      //   name: plan.name
      // }
      // this.setState({ modalPlan });
      break;
    default:
      return state;
  }
}
