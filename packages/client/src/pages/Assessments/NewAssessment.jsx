import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { set, useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const onSubmit = async (data) => {

    // Calculate scores based on responses
    data.score = calculateScore(data);
    data.riskLevel = calculateRiskLevel(data.score);

    const displayData = {
      catDateOfBirth: data.catDateOfBirth,
      catName: data.catName,
      instrumentType: data.instrumentType,
      riskLevel: data.riskLevel,
      score: data.score,
    };

    try {
      await AssessmentService.submit({ assessment: data });
      // eslint-disable-next-line no-console
      console.log(`Assessment submitted successfully`);
      reset();

    } catch (error) {

      // eslint-disable-next-line no-console
      console.error(`Error submitting assessment data: `, error.message);
    }
  };

  const calculateScore = (formData) => {
    let score = 0;

    score += formData.question1 === `Yes` ? 1 : 0;
    score += formData.question2 === `Yes` ? 1 : 0;
    score += formData.question3 === `10+` ? 1 : 0;
    score += formData.question4 === `No` ? 1 : 0;
    score += formData.question5 === `Yes` ? 1 : 0;
    return score;
  };

  const calculateRiskLevel = (score) => {
    if (score >= 0 && score <= 2) {
      return `Low`;
    } else if (score >= 3 && score <= 4) {
      return `Medium`;
    } else if (score >= 5) {
      return `High`;
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Cat Assessment Info</h1>
        <h2>Instrument</h2>
        <ul>
          <li>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="instrumentType">Cat Behavioral Instrument</Form.Label>
              <Form.Control type="text"
                placeholder="Enter text"
                rows={1}
                {...register(`instrumentType`)} />
            </Form.Group>
          </li>
        </ul>
      </div>

      <div>
        <h2>Cat Details</h2>
        <ul>
          <li>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="catName">Cat Name</Form.Label>
              <Form.Control type="text" placeholder="Enter text" {...register(`catName`)} />
            </Form.Group>
          </li>
          <li>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="catDateOfBirth">Date of Birth</Form.Label>
              <Form.Control type="date" {...register(`catDateOfBirth`)} />
            </Form.Group>
          </li>
        </ul>
      </div>

      <div>
        <h2>Questions & Responses</h2>
        <ol>
          <li>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="question1">Previous contact with the Cat Judicial System</Form.Label>
              <Form.Check type="radio"
                {...register(`question1`)}
                label="No (score = 0)"
                name="question1"
                id="question1-1" />
              <Form.Check type="radio"
                {...register(`question1`)}
                label="Yes (score = 1)"
                name="question1"
                id="question1-2" />
            </Form.Group>
          </li>
          <li>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="question2">Physical alterations with other cats</Form.Label>
              <Form.Check type="radio"
                {...register(`question2`)}
                label="No (score = 0)"
                name="question2"
                id="question2-1" />
              <Form.Check type="radio"
                {...register(`question2`)}
                label="Yes (score = 1)"
                name="question2"
                id="question2-2" />
            </Form.Group>
          </li>
          <li>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="question3">Physical altercations with owner (scratching, biting, etc...)</Form.Label>
              <Form.Check
                type="radio"
                {...register(`question3`)}
                label="10+ altercations (score = 1)"
                name="question3"
                id="question3-1"
              />
              <Form.Check
                type="radio"
                {...register(`question3`)}
                label="0-10 altercations (score = 0)"
                name="question3"
                id="question3-2"
              />
            </Form.Group>
          </li>
          <li>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="question4">Plays well with dogs</Form.Label>
              <Form.Check
                type="radio"
                {...register(`question4`)}
                label="No (score = 1)"
                name="question4"
                id="question4-1"
              />
              <Form.Check
                type="radio"
                {...register(`question4`)}
                label="Yes (score = 0)"
                name="question4"
                id="question4-2"
              />
            </Form.Group>
          </li>
          <li>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="question5">Hisses at strangers</Form.Label>
              <Form.Check
                type="radio"
                {...register(`question5`)}
                label="Yes (score = 1)"
                name="question5"
                id="question5-1"
              />
              <Form.Check
                type="radio"
                {...register(`question5`)}
                label="No (score = 0)"
                name="question5"
                id="question5-2"
              />
            </Form.Group>
          </li>
        </ol>
      </div>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};
