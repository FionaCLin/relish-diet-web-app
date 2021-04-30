import constants from '../constants/';

const initialState = [
  {
    recipesList: [
      {
        id: 100,
        name: 'Caramel Apple',
        image: 'apple',
      },
      {
        id: 100,
        name: 'Popeye toast with eggs',
        image: 'recipe',
      },
      {
        id: 200,
        name: 'Pistachio and figs cake',
        image: 'cake',
      },
      {
        id: 100,
        name: 'Tender salmon on bed of salad',
        image: 'chicken',
      },
      {
        id: 100,
        name: 'Meatball migoreng',
        image: 'meatball',
      },
      {
        id: 400,
        name: 'Tomato and basil pasta',
        image: 'paella',
      },
      {
        id: 100,
        name: 'Sunfried tomato and olives pizza',
        image: 'pizza',
      },
      {
        id: 100,
        name: 'Berrilicious porridge',
        image: 'porridge',
      },
      {
        id: 100,
        name: 'Sunfried tomato and olives pizza',
        image: 'protein',
      },
      {
        id: 300,
        name: 'Toasted stacked foccacia sandwich',
        image: 'sandwich',
      },
      {
        id: 100,
        name: 'Banana pudding with caramel sauce',
        image: 'soup',
      },
      {
        id: 500,
        name: 'Banana pudding with caramel sauce',
        image: 'pudding',
      },
    ],
  },
];

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
