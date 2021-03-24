import { login } from '../../../controllers/users/index.js'
import express from 'express';

const router = new express.Router();

router.post('/login', login);

export default router