const router = require(`express`).Router();
const { AssessmentService } = require(`../../libs`);
const { ErrorHandler } = require(`../../utils`);

router.post(`/submit`, (req, res) => {
  const { assessment } = req.body;
  // call the submit function from the server/libs/AssessmentService

});

router.get(`/list`, (req, res) => {
  // call the getList function from the server/libs/AssessmentService

});

exports.router = router;
exports.path = `/api/assessment`;
