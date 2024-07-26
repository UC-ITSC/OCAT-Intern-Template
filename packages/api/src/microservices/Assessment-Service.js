const { Assessment } = require(`../database/models`);

exports.submit = async (assessment) => {
  try {
    console.log(`Creating assessment with data:`, assessment);
    const newAssessment = await Assessment.create(assessment);
    return newAssessment;
  } catch (error) {
    console.error(`Error creating assessment`, error.message);
    throw new Error(`Error creating assessment`, error);
  }
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
};

exports.getList = async () => {
  try {
  // use the sequelize model Assessments from packages/api/src/database/models to fetch
  // the assessment data from the PostgreSQL database
    const assessments = await Assessment.findAll();
    return assessments;
  } catch (error) {
    throw new Error(`Error fetching assessments`, error);
  }
};
