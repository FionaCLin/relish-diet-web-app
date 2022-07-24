import express from 'express';
import {getUOM, getById, getRecipes, saveRecipe} from '../../../controllers/recipes/index.js';

const router = new express.Router();

router.post('/', saveRecipe);
router.get('/ingredients/uom', getUOM);
router.get('/:recipeId', getById);
router.get('/', getRecipes);

export default router;