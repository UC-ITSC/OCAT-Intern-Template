const express = require(`express`);
const { pingRouter } = require(`./ping`);
const { assessmentRouter } = require(`./assessment`);
const { userRouter } = require(`./user`);

const router = express.Router();

router.use(`/ping`, pingRouter);
router.use(`/assessment`, assessmentRouter);
router.use(`/user`, userRouter);

module.exports = { router };
