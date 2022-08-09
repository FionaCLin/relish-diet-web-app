import constants from '../constants';
import {mealPlans} from '../constants/dummyData';

const initialState = {
  mealPlans,
  modalPlan: {
    id: 0,
    name: '',
  },
  defaultPlan: {
    name: '',
    dailyMeals: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    macros: {
      Energy: 0,
      Carbs: 0,
      Protein: 0,
      Fats: 0,
      Sodium: 0,
    },
  },
};

export default function mealPlan(state = initialState, action) {
  // console.log('reducer running', action);
  switch (action.type) {
    case constants.SHOW_DEL_MODEL:
      console.log(action);
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
