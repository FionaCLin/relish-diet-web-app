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

function editRecipe (recipe_id, user_id, recipe) {
    axios.put('api/users/' + user_id + '/recipes/' + recipe.id, recipe
    ).then(function (response) {
      let newCreatedRecipe = response.data;
      console.log('editted recipe', newCreatedRecipe);
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

  function getMealList (userId, callback) {
    axios.get('api/users/' + userId + '/mealplans')
      .then(function (response) {
        let mealList = response.data;
        console.log('get meal list', mealList);
        return callback(mealList);
      }).catch(function (error) {
        console.log("No meal plan");
        console.log(error);
      })
  }

  function deleteMealPlan (plan_id) {
    axios.delete('/api/mealplans/' + plan_id)
      .then(function (response) {
        console.log("Deleted meal plan");
      }).catch(function (error) {
        console.log("No meal plan");
        console.log(error);
      })
  }

  function addMealPlan (mealPlan) {
    axios.post('/api/mealplans/create', mealPlan)
      .then(function (response) {
        let result = response.data;
        console.log('add meal plan', result);
      }).catch(function (error) {
        console.log('meal plan not added');
        console.log(error);
      })
  }

  function getMealPlan (mealPlanId, callback) {
    axios.get('/api/mealplans/' + mealPlanId)
      .then(function (response) {
        let mealplan = response.data;
        console.log('get meal plan', mealplan)
        return callback(mealplan);
      }).catch(function (error) {
        console.log('did not get meal plan');
        console.log(error);
      })
  }

  function editMealPlan (mealPlanId, mealPlan) {
    axios.put('/api/mealplans/' + mealPlanId, mealPlan)
      .then(function (response) {
        console.log('editted meal plan');
      }).catch(function (error) {
        console.log('did not edit meal plan');
        console.log(error);
      })
  }

  function searchName(user_id, keyword, callback) {
    axios.get('/api/users/' + user_id + '/dashboard/' + keyword)
      .then(function (response) {
        let recipes = response.data;
        console.log('name searched recipes', recipes);
        return callback(recipes);
      }).catch(function (error) {
        console.log('did not search');
        console.log(error);
      })
  }

export default {
  login,
  getBookmarks,
  getPersonal,
  addRecipe,
  editRecipe,
  deleteRecipe,
  getRecipe,
  addComment,
  addBookmark,
  deleteBookmark,
  updateUser,
  updatePassword,
  dashboardSearch,
  getDashboardWithGoal,
  getMealList,
  deleteMealPlan,
  addMealPlan,
  getMealPlan,
  editMealPlan,
  searchName
};
