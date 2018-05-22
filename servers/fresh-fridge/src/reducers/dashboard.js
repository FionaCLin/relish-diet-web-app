import constants from '../constants/'
import api from '../api.js'

const initialState = [
  {
    recipesList: [{
      id: 1,
      name: 'Caramel Apple',
      image: 'apple'
    }, {
      id: 2,
      name: 'Popeye toast with eggs',
      image: 'recipe'
    }, {
      id: 3,
      name: 'Pistachio and figs cake',
      image: 'cake'
    }, {
      name: 'Tender salmon on bed of salad',
      image: 'chicken'
    }, {
      name: 'Meatball migoreng',
      image: 'meatball'
    }, {
      name: 'Tomato and basil pasta',
      image: 'paella'
    }, {
      name: 'Sunfried tomato and olives pizza',
      image: 'pizza'
    }, {
      name: 'Berrilicious porridge',
      image: 'porridge'
    }, {
      name: 'Banana pudding with carmael sauce',
      image: 'pudding'
    }, {
      name: 'Sunfried tomato and olives pizza',
      image: 'protein'
    }, {
      name: 'Berrilicious porridge',
      image: 'sandwich'
    }, {
      name: 'Banana pudding with carmael sauce',
      image: 'soup'
    }]
  }
]

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case constants.SELECT_RECIPE:
      //api.get recipe detail
      // render to recipe
      break;
    default:
      return state;
  }
}
