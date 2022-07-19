import express from 'express';

import {getById, getByMemberId} from '../../../controllers/recipes/index.js';

const router = new express.Router();

router.get('/:recipeId', getById);
router.get('/members/:memberId', getByMemberId);

export default router;
