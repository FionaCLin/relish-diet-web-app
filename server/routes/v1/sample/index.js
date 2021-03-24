import express from 'express';
import { sample } from '../../../controllers/sample/index.js'

const router = new express.Router()

router.get('/sample', sample);

export default router