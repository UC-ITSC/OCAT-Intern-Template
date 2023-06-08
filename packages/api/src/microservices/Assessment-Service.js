const { Assessment } = require(`../database/models`);

exports.submit = async (assessment) => {
  const {
    altercationsWithCats, altercationsWithOwner
    , catNameValue, dob, hissesAtStrangers, playsWithDogs, previousContact,
  } = assessment;
  const totalScore = parseInt(altercationsWithCats) +
    parseInt(altercationsWithOwner) +
    parseInt(hissesAtStrangers) +
    parseInt(playsWithDogs) +
    parseInt(previousContact);

  let riskLevelIndex;

  if (totalScore >= 0 && totalScore <= 1) {
    riskLevelIndex = `low`;
  } else if (totalScore >= 2 && totalScore <= 3) {
    riskLevelIndex = `medium`;
  } else if (totalScore >= 4 && totalScore <= 5) {
    riskLevelIndex = `high`;
  } else {
    // Handle any other cases or invalid scores
    riskLevelIndex = `unknown`;
  }

  try {
    const currentDate = new Date();
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    const createdAtTime = currentDate.toLocaleString(`en-US`, { timeZone });

    await Assessment.create({
      instrumentType: 1,
      score: totalScore,
      riskLevel: riskLevelIndex,
      catName: catNameValue,
      catDateOfBirth: dob,
      createdAt: createdAtTime,
      updatedAt: createdAtTime,
    });

    console.log(`Assessment data saved successfully`);
  } catch (error) {
    console.error(`Error saving assessment data:`, error);
  }
};

exports.getList = async () => {
  try {
    const assessments = await Assessment.findAll();

    console.log(`Fetched assessments:`, assessments);

    return assessments;
  } catch (error) {
    console.error(`Error fetching assessments:`, error);
    return [];
  }
};
