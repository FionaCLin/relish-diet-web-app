import express from 'express';
import {getUOM} from '../../../controllers/recipes/index.js';
import {getById, getByMemberId} from '../../../controllers/recipes/index.js';

const router = new express.Router();

router.get('/uom', getUOM);
router.get('/:recipeId', getById);
router.get('/members/:memberId', getByMemberId);

export default router;
