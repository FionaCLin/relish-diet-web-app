import express from 'express';
import usersRouters from './users/index.js';

const router = new express.Router();

router.use('/users', usersRouters);

export default router;
