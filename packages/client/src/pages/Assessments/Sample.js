import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';
export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  return <Form >
    <h1 >Cat Behavioral Instrument</h1>
    <h2>Cat Details</h2>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label>Cat Name:
          <input type="text" className="form-control" placeholder="Enter Cat name" required />
        </label>
      </div>
      <div className="form-group col-md-6">
        <label>Cat Date of Birth:
          <input type="date" className="form-control" placeholder="Cat Date of Birth" required />
        </label>
      </div>

    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label>Cat Name:
          <input type="text" className="form-control" placeholder="Enter Cat name" required />
        </label>
      </div>
    </div>
    <h2>Questions & Responses</h2>
    <h1> </h1>
    <label>1.Previous contact with the Cat Judicial System
      <div>
        <input type="radio" value="0" name="Previous contact with the Cat Judicial System" /> No (score = 0)
        <input type="radio" value="1" name="Previous contact with the Cat Judicial System" /> Yes (score = 1)
      </div>
    </label>
    <h1> </h1>
    <label>2.Physical altercations with other cats
      <div>
        <input type="radio" value="0" name="Physical altercations with other cats" /> 0-3 altercations (score = 0)
        <input type="radio" value="1" name="Physical altercations with other cats" /> 3+ altercations (score = 1)
      </div>
    </label>
    <h1> </h1>
    <label>3.Physical altercations with owner (scratching, biting, etc...)
      <div>
        <input type="radio" value="0" name="Physical" />  10+ altercations (score = 1)
        <input type="radio" value="1" name="Physical" /> 0-10 altercations (score = 0)
      </div>
    </label>
    <h1> </h1>
    <label>4.Plays well with dogs
      <div>
        <input type="radio" value="1" name="Dogs" />No (score = 1)
        <input type="radio" value="0" name="Dogs" /> Yes (score = 0)
      </div>
    </label>
    <h1> </h1>
    <label>5.Hisses at strangers
      <div>
        <input type="radio" value="1" name="Hisses" />Yes (score = 1)
        <input type="radio" value="0" name="Hisses" /> No (score = 0)
      </div>
    </label>
    <h1> </h1>
    <Button variant="primary" type="submit">Submit</Button>
  </Form>;
};
