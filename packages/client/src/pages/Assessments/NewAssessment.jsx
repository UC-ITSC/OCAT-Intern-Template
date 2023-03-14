import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
  const { getValues, handleSubmit, register } = useForm();
  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API

  const getRisk = (score) => {
    switch (true) {
      case score <= 1:
        return `low`;
      case score <= 3:
        return `medium`;
      case score <= 5:
        return `high`;
      default:
        break;
    }
  };

  const getScore = () => {
    const scores = [
      getValues(`q1`),
      getValues(`q2`),
      getValues(`q3`),
      getValues(`q4`),
      getValues(`q5`),
    ];
    const score = scores.map((val) => parseInt(val)).reduce((a, b) => a + b);
    return !isNaN(score) ? score : 0;
  };

  const onSubmit = async (data) => {
    data.score = getScore();
    data.risk_level = getRisk(data.score);
    data.created_at = new Date();
    // TODO: Need to remove the below line if not required in future
    data.deleted_at = ``;
    data.updated_at = ``;
    // eslint-disable-next-line no-console
    console.log(
      `score: ${data.score}, risk level values: ${data.riskLevel}, complete data:`,
      data
    );
    await AssessmentService.submit(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="instrument-name">Instrument Name</label>
        <input
          id="instrument-name"
          className="form-control"
          value="Cat Behavioral Instrument"
          readOnly
          {...register(`instrument_type`)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cat-name">Cat Name</label>
        <input
          id="cat-name"
          type="text"
          placeholder="Enter your Cat Name"
          className="form-control"
          {...register(`cat_name`)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cat-dob">Cat Date of Birth</label>
        <input
          id="cat-dob"
          type="date"
          className="form-control"
          placeholder="Enter Cat Date of Birth"
          {...register(`cat_date_of_birth`)}
        />
      </div>
      <h4>Questions & Responses</h4>
      <div className="form-group">
        1. Previous contact with the Cat Judicial System
        <div className="form-check">
          <label className="form-check-label" htmlFor="q1-1">
            <input
              className="form-check-input"
              type="radio"
              id="q1-1"
              value={0}
              {...register(`q1`)}
            />
            No
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="q1-2">
            <input
              className="form-check-input"
              type="radio"
              id="q1-2"
              value={1}
              {...register(`q1`)}
            />
            Yes
          </label>
        </div>
      </div>
      <div className="form-group">
        2. Physical altercations with other cats
        <div className="form-check">
          <label className="form-check-label" htmlFor="q2-1">
            <input
              className="form-check-input"
              type="radio"
              id="q2-1"
              value={0}
              {...register(`q2`)}
            />
            0-3 altercations
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="q2-2">
            <input
              className="form-check-input"
              type="radio"
              id="q2-2"
              value={1}
              {...register(`q2`)}
            />
            3+ altercations
          </label>
        </div>
      </div>
      <div className="form-group">
        3. Physical altercations with owner (scratching, biting, etc...)
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="q3-1"
            value={1}
            {...register(`q3`)}
          />
          <label className="form-check-label" htmlFor="q3-1">
            10+ altercations
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="q3-2"
            value={0}
            {...register(`q3`)}
          />
          <label className="form-check-label" htmlFor="q3-2">
            0-10 altercations
          </label>
        </div>
      </div>
      <div className="form-group">
        4. Plays well with dogs
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="q4-1"
            value={1}
            {...register(`q4`)}
          />
          <label className="form-check-label" htmlFor="q4-1">
            No
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="q4-2"
            value={0}
            {...register(`q4`)}
          />
          <label className="form-check-label" htmlFor="q4-2">
            Yes
          </label>
        </div>
      </div>
      <div className="form-group">
        5. Hisses at strangers
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="q5-1"
            value={1}
            {...register(`q5`)}
          />
          <label className="form-check-label" htmlFor="q5-1">
            No
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="q5-2"
            value={0}
            {...register(`q5`)}
          />
          <label className="form-check-label" htmlFor="q5-2">
            Yes
          </label>
        </div>
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
