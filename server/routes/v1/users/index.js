import express from 'express';

import {getByEmail} from '../../../controllers/users/index.js';

const router = new express.Router();

router.post('/:email/profile', getByEmail);

export default router;
