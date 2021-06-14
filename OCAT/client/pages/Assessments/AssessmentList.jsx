import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    fetchAssessments(async () => {
      const assessments = await AssessmentService.getList();
      setAssessments(assessments);
    });
    fetchAssessments();
  }, []);

  return (
    <div>
      {/*
          List goes here
          Please use the library react-table https://www.npmjs.com/package/react-table
      */}
    </div>
  );
};
