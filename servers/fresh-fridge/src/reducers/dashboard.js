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
      name: 'Caramel Apple',
      image: 'apple'
    }, {
      name: 'Caramel Apple',
      image: 'apple'
    }, {
      name: 'Caramel Apple',
      image: 'apple'
    }, {
      name: 'Caramel Apple',
      image: 'apple'
    }, {
      name: 'Caramel Apple',
      image: 'apple'
    }, {
      name: 'Caramel Apple',
      image: 'apple'
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
