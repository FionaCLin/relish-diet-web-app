import sampleRouters from './sample/index.js'
import usersRouters from './users/index.js'
import express from 'express';

const router = new express.Router();

router.use('/users', usersRouters);
router.use('/sample', sampleRouters);

export default router