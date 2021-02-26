import React from 'react';
import { AssessmentService } from '../shared/services/assessment.service';

export function AssessmentNew(){

    //create a form that utilizes the "onSubmit" function to send data to OCAT/client/libs and onto the OCAT/server/routes express API
    const onSubmit = async (data) => {
        await AssessmentService.submit(data);
    };

  return (
    <form>
        <button type="submit">Submit</button>
    </form>
  );
}