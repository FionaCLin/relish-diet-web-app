import express from 'express';
import usersRouters from './users/index.js';
import recipesRouters from './recipes/index.js';

const router = new express.Router();

router.use('/users', usersRouters);
router.use('/recipes', recipesRouters);

export default router;
