import express from 'express';
import {getById, get} from '../../../controllers/ingredients/index.js';

const router = new express.Router();

router.get('/:id', getById);
router.get('/', get);

export default router;
