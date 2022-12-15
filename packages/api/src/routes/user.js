const { Router } = require(`express`);
const { ResponseHandler } = require(`../utils`);
const { UserService } = require(`../microservices`);

const userRouter = Router();

// Place your routes in here

module.exports = { userRouter };
