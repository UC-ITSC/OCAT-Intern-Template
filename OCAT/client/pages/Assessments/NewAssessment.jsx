import React from 'react';
import { Button } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to OCAT/client/services/AssessmentService.js and
  // then onto the OCAT/server/routes/AssessmentAPI express API
  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  return <form>
    <Button variant="primary" type="submit">Submit</Button>
  </form>;
};
