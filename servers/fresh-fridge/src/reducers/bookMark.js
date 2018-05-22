import constants from '../constants/'
import api from '../api.js'

const initialState = [
  {
    recipbookMarks: [{
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
      id: 4,
      name: 'Tender salmon on bed of salad',
      image: 'chicken'
    }]
  }
]

export default function bookmark(state = initialState, action) {
  switch (action.type) {
    case constants.SELECT_RECIPE:
      //api.get recipe detail
      // render to recipe
      break;
    default:
      return state;
  }
}
