const { Assessment } = require(`../database/models`);

exports.submit = async (assessment) => {
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
  const { altercationsWithCats, altercationsWithOwner, hissesAtStrangers, playsWithDogs, previousContact } = assessment;

  const totalScore = parseInt(altercationsWithCats) +
  parseInt(altercationsWithOwner) + parseInt(hissesAtStrangers) + parseInt(playsWithDogs) + parseInt(previousContact);
  console.log(totalScore);

};

exports.getList = () => {
  // use the sequelize model Assessments from packages/api/src/database/models to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];

  return assessments;
};
