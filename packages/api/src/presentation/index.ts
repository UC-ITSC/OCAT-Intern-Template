import express from 'express';
import { assessmentRouter } from './assessmentRouter';
import { userRouter } from './userRouter';
import { pingRouter } from './pingRouter';

const router = express.Router();

router.use(`/ping`, pingRouter);
router.use(`/assessments`, assessmentRouter);
router.use(`/users`, userRouter);

export { router };
