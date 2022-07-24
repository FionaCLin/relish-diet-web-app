import express from 'express';
import {getUOM, getById, get, save} from '../../../controllers/recipes/index.js';

const router = new express.Router();

router.post('/', save);
router.get('/ingredients/uom', getUOM);
router.get('/:recipeId', getById);
router.get('/', get);

export default router;