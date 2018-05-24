import axios from 'axios';
axios.defaults.baseURL = 'https://localhost:3002';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

function login (email, password) {
  // console.log(email, password);
  // let user = null;
  // axios.post('http://localhost:3002/api/users/login', {
  //   // email: 'synexenel1416@yopmail.com',
  //   // password: '123'
  //   email: email,
  //   password: password
  // }).then(function (response) {
  //   // suppose the response contain the token?
  //   user = response.data;
  //   console.log('you have login', user);
  // }).catch(function (error) {
  //   console.log('you haven\'t login');
  //   console.log(error);
  // });
  // return user;
  return getRecipe({});
}
function addRecipe (recipe) {
  recipe = {
    id: 100,
    creator: 1,
    name: 'Popeye toast with eggs',
    img: ['images/recipe.jpg', 'images/recipe2.png', 'images/recipe3.jpg'],
    macros: {
      Intake: 1025,
      Carbs: 32,
      Protein: 24,
      Fats: 15,
      Sodium: 2
    },
    method: 'Preheat the grill to high.\n' +
      'Lay the tomato vines in a large baking tray, prick each tomato with the tip of a sharp knife' +
      ' and grill for 4 minutes, then add the bread to the tray to toast on both sides.\n' +
      'Meanwhile, crack 1 egg into a blender, add the ham, spinach, a good pinch of black pepper and the milk and blitz until smooth.\n' +
      'Take the tray from under the grill and divide the green eggy mixture between' +
      'the four pieces of toast, spreading it right out to the edges.\n' +
      'Dry fry the remaining 2 eggs in a non-stick frying pan on a medium heat, covering the pan with' +
      ' a lid to steam and coddle the eggs on the top – cook to your liking.',
    ingredients: [
      '160 g of cherry tomatoes',
      '4 slices of wholemeal bread',
      '3 large eggs',
      '80 g of baby spinach'
    ]
  };

  axios.post('/api/recipes/create', recipe ) 
    .then(function (response) {
    // suppose the response contain the token?
    let newCreatedRecipe = response.data;
    console.log('new recipe', newCreatedRecipe);
  }).catch(function (error) {
    console.log("you haven't made a recipe");
    console.log(error);
  });
}

function getRecipe (recipeID) {
  recipeID = 1;

  axios.get('/api/recipes/'+recipeID)
    .then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.log("Could not get recipe");
      console.log(error);
    });
}

export default {
  login
};
