'use strict';
let data1 = require('./data1.js');

let users = data1().users;
let recipes = data1().recipes;
let mealplans = data1().mealplans;
let JSONFORMAT = true;
let i = users.length;

if (!JSONFORMAT) {
  console.log("'use restrict';\n\n module.exports = () => { \n");
}

if (JSONFORMAT) console.log('{ \"users\" : [');
else console.log('let users = [');
users.forEach(element => {
  let print = (JSONFORMAT) ? JSON.stringify(element) : element;
  console.log(print);
  i--;
  if (i !== 0) {
    console.log(',');
  }
});
if (JSONFORMAT) {
  console.log('],');
} else {
  console.log('];');
}
console.log();
i = recipes.length;

if (JSONFORMAT) console.log(' "recipes" : [');
else console.log('let recipes = [');
recipes.forEach(element => {
  recipes.rev;
  let print = (JSONFORMAT) ? JSON.stringify(element) : element;
  console.log(print);
  i--;
  if (i !== 0) {
    console.log(',');
  }
});

if (JSONFORMAT) {
  console.log('],');
} else {
  console.log('];');
}
console.log();

i = mealplans.length;

if (JSONFORMAT) console.log(' "mealplans" : [');
else console.log('let mealplans = [');
mealplans.forEach(element => {
  element.time_slots.forEach(t => {
    t.recipe_id = Math.floor(Math.random() * recipes.length);
  });
  let print = (JSONFORMAT) ? JSON.stringify(element) : element;
  console.log(print);
  i--;
  if (i != 0) {
    console.log(',');
  }
});

if (JSONFORMAT) {
  console.log(']}');
} else {
  console.log('];');
}

if (!JSONFORMAT) {
  console.log(' return {\n users: users,\n recipes: recipes,\n mealplans: mealplans\n };\n };\n ');
}
