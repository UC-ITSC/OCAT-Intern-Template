const { Router } = require(`express`);

const pingRouter = Router();

pingRouter.get(`/`, (req, res) => res.json({ ping: `pong` }));

module.exports = { pingRouter };
