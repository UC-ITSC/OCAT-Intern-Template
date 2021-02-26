const { AssessmentService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);

const BASE_URL = `/assessment`;

module.exports = server => {

  server.post(
    `${ BASE_URL }/submit`,
    async (req, res, next) => {
      try {
        const { assessment } = req.params;
    
        //verify that your data is making it here to the API by using console.log(assessment);
        //call the AssessmentService.submit function from the API/src/microservices/Assessment/ and supply the correct parameters
    
        ResponseHandler(
          res,
          `Submitted assessment`,
          {},
          next
        );
      } catch (err) {
        next(err);
      }
    }
  );
};
