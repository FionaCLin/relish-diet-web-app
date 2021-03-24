import {healthCheck} from '../controllers/healthcheck/index.js'
import v1Routers from './v1/index.js'
import express from 'express';

const router = new express.Router()

router.get('/healthCheck', healthCheck);
router.use('/v1', v1Routers);

export default router;