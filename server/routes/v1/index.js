import * as fs from 'fs';
import * as path from 'path';
import express from 'express';
import usersRouters from './users/index.js';
import recipesRouters from './recipes/index.js';
import ingredientsRouters from './ingredients/index.js';
// const routers = {};
// console.log(usersRouters);

// const basename = path.basename(__filename);
// const router = (() =>{
//   const routers = new express.Router();

//   const routeNames = fs.readdirSync(__dirname).filter((f) => {
//     return f.indexOf('.') !== 0 && f !== basename && f.slice(-3) !== '.js';
//   });
//   for (const routeName of routeNames) {
//     (async () => {
//       const {default: router} = await import(path.join(__dirname, routeName, 'index.js'));

//       console.log(routeName, routers, router);

//       router.use(`/${routeName}`, router);
//     })();
//   }
//   return routers
// })()

const router = new express.Router();

router.use('/users', usersRouters);
router.use('/recipes', recipesRouters);
router.use('/ingredient', ingredientsRouters);

export default router;
