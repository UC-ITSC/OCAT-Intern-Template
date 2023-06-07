const express = require(`express`);
const { pingRouter } = require(`./ping`);
const { assessmentRouter } = require(`./assessment`);
const { userRouter } = require(`./user`);

const router = express.Router();

router.use(`/ping`, pingRouter);
router.use(`/assessment`, assessmentRouter);
router.use(`/user`, userRouter);
router.use(`/assessment/new`, assessmentRouter);
module.exports = { router };
