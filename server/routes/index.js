import express from 'express';
import {healthcheck} from '../controllers/healthcheck/index.js';
import {login} from '../controllers/users/index.js';
import v1Routers from './v1/index.js';
// import authorize from '../middlewares/verify-token.js';

const router = new express.Router();

router.get('/healthcheck', healthcheck);
router.post('/login', login);

// router.use(authorize);
router.use('/v1', v1Routers);

export default router;
