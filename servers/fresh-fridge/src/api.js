import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3002/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function login (email, password, callback) {
  console.log(email, password);
  let user = null;
  axios.post('login', {
    // email: 'synexenel1416@yopmail.com',
    // password: '123'
    email: email,
    password: password
  }).then(function (response) {
    let user = response.data;
    console.log('you have login', user);
    return callback(user);
  }).catch(function (error) {
    console.log('you haven\'t login');
    return callback(error);
  });
}

function updateUser (user_id, attrs, callback) {
  axios.put('api/users/' + user_id, attrs)
    .then(function (response) {
      return callback('ok');
    }).catch(function (error) {
      return callback(error);
    });
}

function updatePassword (user_id, attrs, callback) {
  axios.put('api/users/' + user_id + '/password', attrs)
    .then(function (response) {
      return callback('ok');
    }).catch(function (error) {
      return callback(error);
    });
}

function getBookmarks (userId, callback) {
  console.log(userId);
  let bookmarkedRecipes = null;
  axios.get('api/users/' + userId + '/bookmarks'
  ).then(function (response) {
    bookmarkedRecipes = response.data;
    console.log('recevied bookmarked recipes', bookmarkedRecipes);
    return callback(bookmarkedRecipes);
  }).catch(function (error) {
    console.log('no bookmarked recipes');
    console.log(error);
    return error;
  });
}

function getPersonal (userId, callback) {
  console.log(userId);
  let personalRecipes = null;
  axios.get('api/users/' + userId + '/recipes'
  ).then(function (response) {
    personalRecipes = response.data;
    return callback(personalRecipes);
  }).catch(function (error) {
    console.log('no personal recipes');
    console.log(error);
    return error;
  });
}

function getRecipe (recipe_id, callback) {
  axios.get('api/recipes/' + recipe_id
  ).then(function (response) {
    let recipe = response.data;
    console.log('get recipe 1', recipe);
    return callback(recipe);
  }).catch(function (error) {
    console.log('you haven\'t login');
    console.log(error);
    return error;
  });
}

function addComment (recipe_id, comment, callback) {
  axios.post('api/recipes/' + recipe_id + '/reviews/create', comment)
    .then(function (response) {
      comment = response.data;
      console.log('you have ', comment);
      return callback(comment);
    }).catch(function (error) {
      console.log('Error');
      console.log(error);
    });
}

function addBookmark (user_id, recipe_id, callback) {
  axios.put('/api/users/' + user_id + '/bookmarks/' + recipe_id
  ).then(function (response) {
    let bookmark = response.data;
    console.log('new bookmark', bookmark);
    return callback(bookmark);
  }).catch(function (error) {
    console.log('Error');
    console.log(error);
  });
}

function deleteBookmark (user_id, bookmark_id) {
  axios.delete('/api/users/' + user_id + '/bookmarks/' + bookmark_id
  ).then(function (response) {
    console.log('bookmark deleted');
    return response.data;
  }).catch(function (error) {
    console.log('Error');
    console.log(error);
  });
}

function getDashboard (user_id) {
  axios.post('api/users/' + user_id + '/dashboard/'
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
  axios.post('api/recipes/create', recipe
  ).then(function (response) {
    let newCreatedRecipe = response.data;
    console.log('new recipe', newCreatedRecipe);
  }).catch(function (error) {
    console.log('you haven\'t login');
    console.log(error);
  });
}

function editRecipe (recipe) {
    axios.put('api/recipes/' + recipe.id, recipe
    ).then(function (response) {
      let newCreatedRecipe = response.data;
      console.log('new recipe', newCreatedRecipe);
    }).catch(function (error) {
      console.log("you haven't made a recipe");
      console.log(error);
    });
}

function deleteRecipe (recipe_id) {
  axios.delete('/api/recipes/' + recipe_id
  ).then(function (response) {
    console.log('deleted recipe');
  }).catch(function(error) {
    console.log('Error');
    console.log(error);
  })
}


function dashboardSearch (userId, keyword) {
  axios.get('api/users/' + userId + '/dashboard/' + keyword
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

function getDashboardWithGoal (userId, goals, callback) {
  axios.post('api/users/' + userId + '/dashboard/', goals)
    .then(function (response) {
      let recipes = response.data;
      console.log('get recipe 1', recipes);
      return callback(recipes);
    }).catch(function (error) {
      console.log('you haven\'t login');
      console.log(error);
      return callback(error);
    });
}

export default {
  login,
  getBookmarks,
  getPersonal,
  addRecipe,
  // editRecipe,
  deleteRecipe,
  getRecipe,
  addComment,
  addBookmark,
  deleteBookmark,
  updateUser,
  updatePassword,
  dashboardSearch,
  getDashboardWithGoal
};
