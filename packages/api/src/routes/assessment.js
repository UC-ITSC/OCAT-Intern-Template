const { Router } = require(`express`);
const { AssessmentService } = require(`../microservices`);
const { ResponseHandler } = require(`../utils`);

const assessmentRouter = Router();

assessmentRouter.post(
  `/submit`,
  async (req, res, next) => {
    try {
      const { assessment } = req.body;
      console.log(assessment);
      // verify that your data is making it here to the API by using console.log(assessment);
      await AssessmentService.submit(assessment);

      ResponseHandler(res, `Submitted assessment`, {});
    } catch (err) {
      next(err);
    }
  },
);

assessmentRouter.get(
  `/list`,
  async (req, res, next) => {
    try {
      // verify that your data is making it here to the API by using console.log();
      const assessments = await AssessmentService.getList();
      ResponseHandler(res, `Fetched assessments`, { assessments });
    } catch (err) {
      next(err);
    }
  },
);

module.exports = { assessmentRouter };
