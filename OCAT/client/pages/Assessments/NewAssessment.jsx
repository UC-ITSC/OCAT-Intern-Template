import React from 'react';
import { Button } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to OCAT/client/libs and
  // onto the OCAT/server/routes express API
  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  return <form>
    <Button variant="primary" type="submit">Submit</Button>
  </form>;
};
