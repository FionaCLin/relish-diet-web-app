import express from 'express';
import {healthcheck} from '../controllers/healthcheck/index.js';
import v1Routers from './v1/index.js';

const router = new express.Router();

router.get('/healthcheck', healthcheck);
router.use('/v1', v1Routers);

export default router;
