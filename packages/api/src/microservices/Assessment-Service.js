const { Assessment } = require(`../database/models`);

exports.submit = async (assessment) => {
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
  const model = {
    catDateOfBirth: assessment.cat_date_of_birth,
    catName: assessment.cat_name,
    createdAt: assessment.created_at,
    instrumentType: assessment.instrument_type,
    riskLevel: assessment.risk_level,
    score: assessment.score,
  };
  await Assessment.create(model);
};

exports.getList = () => {
  // use the sequelize model Assessments from packages/api/src/database/models to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];

  return assessments;
};
