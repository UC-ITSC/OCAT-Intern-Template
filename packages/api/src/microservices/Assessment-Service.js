const { Assessment } = require(`../database/models`);

exports.submit = async (assessment) => {

};

exports.getList = async () => {

  try {
    const assessments = await Assessment.findAll();
    return assessments;
  } catch (error) {
    // handle the error (e.g., logging, throwing an exception)
    // eslint-disable-next-line no-console
    console.log(`Error fetching assessments:`, error);
    throw error;
  }
};
