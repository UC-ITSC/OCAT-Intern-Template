const { Assessments } = require(`../Database`);

exports.submit = (assessment) =>
  new Promise(async (resolve, reject) => {
    try {
    // use the bookshelf model Assessments from API/src/microservices/Database to save
    // the assessment data in the PostgreSQL database

      resolve();
    } catch (err) {
      reject(err);
    }
  });

  exports.getList = () =>
  new Promise(async (resolve, reject) => {
    try {
    // use the bookshelf model Assessments from API/src/microservices/Database to fetch
    // the assessment data from the PostgreSQL database

      resolve();
    } catch (err) {
      reject(err);
    }
  });
