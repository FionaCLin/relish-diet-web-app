import express from 'express';

import {getUOM} from '../../../controllers/recipes/index.js';

const router = new express.Router();

router.get('/uom', getUOM);

export default router;
