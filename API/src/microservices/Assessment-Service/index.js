const { Assessments } = require(`../Database`);

exports.submit = (assessment) => {
  return new Promise(async (resolve, reject) => { //eslint-disable-line
    try {
      //use the bookshelf model Assessments from API/src/microservices/Database to save the assessment data in the PostgreSQL database

      resolve();
    } catch (err) {
      reject(err);
    }
  });
};