import { Router } from 'express';

const pingRouter = Router();

pingRouter.get(`/`, (req, res) => {
  res.json({
    message: `pong`,
    timestamp: new Date().toISOString(),
  });
});

export { pingRouter };
