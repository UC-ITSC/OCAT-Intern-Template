const router = require(`express`).Router();
const { IndexRoute } = require(`../../utils`);

router.get(`/`, IndexRoute);

exports.router = router;
exports.path = `/`;
