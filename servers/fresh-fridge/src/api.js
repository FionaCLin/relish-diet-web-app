import axios from 'axios';
import { recipeInfo } from './constants/dummyData.js';
axios.defaults.baseURL = 'http://localhost:3002/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function login (email, password) {
  console.log(email, password);
  let user = null;
  axios.post('api/users/login', {
    // email: 'synexenel1416@yopmail.com',
    // password: '123'
    email: email,
    password: password
  }).then(function (response) {
    // suppose the response contain the token?
    let user = response.data;
    console.log('you have login', user);
    return user;
  }).catch(function (error) {
    console.log('you haven\'t login');
    console.log(error);
    return error;
  });
}

function editRecipe (recipe) {
  axios.put('api/recipes/' + recipe.id, recipe
  ).then(function (response) {
    let newCreatedRecipe = response.data;
    console.log('new recipe', newCreatedRecipe);
  }).catch(function (error) {
    console.log('you haven\'t login');
    console.log(error);
  });
}
function getDashboard (user_id) {
  axios.get('api/users/' + user_id + '/dashboard/'
  ).then(function (response) {
    let recipe = response.data;
    console.log('get recipe 1', recipe);
    return recipe;
  }).catch(function (error) {
    console.log('you haven\'t login');
    console.log(error);
    return error;
  });
}
function addRecipe (recipe) {
  recipe = recipeInfo[0];
  axios.post('api/recipes/create', recipe
  ).then(function (response) {
    let newCreatedRecipe = response.data;
    console.log('new recipe', newCreatedRecipe);
  }).catch(function (error) {
    console.log('you haven\'t login');
    console.log(error);
  });
}

function getRecipe (recipe_id) {
  axios.get('api/recipes/' + recipe_id
  ).then(function (response) {
    let recipe = response.data;
    console.log('get recipe 1', recipe);
    return recipe;
  }).catch(function (error) {
    console.log('you haven\'t login');
    console.log(error);
    return error;
  });
}

function addComment (recipe_id, comment) {
  comment = {
    commentor: 2,
    message: 'Was a great meal, but my husband found it a little bit salty.',
    rating: 3
  };
  axios.post('api/recipes/' + recipe_id + '/reviews/create', comment)
    .then(function (response) {
      comment = response.data;
      console.log('you have ', comment);
      return comment;
    }).catch(function (error) {
      console.log('Error');
      console.log(error);
    });
}
function delComment (commentId) {
  axios.delete('api/reviews/' + commentId)
    .then(function (response) {
    }).catch(function (error) {
      console.log('Error');
      console.log(error);
    });
}
function editComment (commentId, comment) {
  axios.put('api/reviews/' + commentId, comment)
    .then(function (response) {
      console.log('you have ', comment);
      return comment;
    }).catch(function (error) {
      console.log('Error');
      console.log(error);
    });
}

export default {
  login
};
