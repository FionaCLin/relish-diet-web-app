import express from 'express';

import {login} from '../../../controllers/users/index.js';

const router = new express.Router();

router.post('/login', login);

export default router;
