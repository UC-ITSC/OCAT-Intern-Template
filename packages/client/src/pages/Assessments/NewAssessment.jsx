import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm();

  const calculateScore = (data) => {
    // calculate the score based on the data from the form
    let score = 0;
    score += parseInt(data.previousContact);
    score += parseInt(data.altercationsWithCats);
    score += parseInt(data.altercationsWithOwner);
    score += parseInt(data.playsWithDogs);
    score += parseInt(data.hissesAtStrangers);
    return score;
  };

  const determineRiskLevel = (score) => {
    if (score <= 1) { return `Low`; }
    if (score <= 3) { return `Medium`; }
    return `High`;
  };

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const onSubmit = async (data) => {
    const score = calculateScore(data);
    const riskLevel = determineRiskLevel(score);

    const assessmentData = {
      ...data,
      riskLevel,
      score,
    };

    console.log(assessmentData);
    try {
      await AssessmentService.submit(assessmentData);
      alert(`Assessment submitted`);
      reset();
    } catch (error) {
      console.log(`Error submitting assessment:`, error);
      alert(`Failed to submit assessment`);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Cat Assessment Info</h1>
      <h2>Instrument</h2>
      <p>Cat Behavioral Instrument (static text)</p>
      <Form.Group controlId="instrumentType">
        <Form.Label>Instrument Type</Form.Label>
        <Form.Control {...register(`instrumentType`, { required: true })} />
        {errors.instrumentType && <span>This field is required</span>}
      </Form.Group>

      <h2>Cat Details</h2>
      <Form.Group controlId="catName">
        <Form.Label>Cat Name</Form.Label>
        <Form.Control {...register(`catName`, { required: true })} />
        {errors.catName && <span>This field is required</span>}
      </Form.Group>

      <Form.Group controlId="catDateOfBirth">
        <Form.Label>Cat Date of Birth</Form.Label>
        <Form.Control type="date" {...register(`catDateOfBirth`, { required: true })} />
        {errors.catDateOfBirth && <span>This field is required</span>}
      </Form.Group>

      <h2>Questions & Responses</h2>
      <Form.Group controlId="previousContact">
        <Form.Label>1. Previous contact with the Cat Judicial System</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="No (score = 0)"
            value="0"
            {...register(`previousContact`, { required: true })}
          />
          <Form.Check
            type="radio"

            label="Yes (score = 1)"
            value="1"
            {...register(`previousContact`, { required: true })}
          />
          {errors.previousContact && <span>This field is required</span>}
        </div>
      </Form.Group>

      <Form.Group controlId="altercationsWithCats">
        <Form.Label>2. Physical altercations with other cats</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="0-3 altercations (score = 0)"
            value="0"
            {...register(`altercationsWithCats`, { required: true })}
          />
          <Form.Check
            type="radio"
            label="3+ altercations (score = 1)"
            value="1"
            {...register(`altercationsWithCats`, { required: true })}
          />
          {errors.altercationsWithCats && <span>This field is required</span>}
        </div>
      </Form.Group>

      <Form.Group controlId="altercationsWithOwner">
        <Form.Label>3. Physical altercations with owner (scratching, biting, etc...)</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="10+ altercations (score = 1)"
            value="1"
            {...register(`altercationsWithOwner`, { required: true })}
          />
          <Form.Check
            type="radio"
            label="0-10 altercations (score = 0)"
            value="0"
            {...register(`altercationsWithOwner`, { required: true })}
          />
          {errors.altercationsWithOwner && <span>This field is required</span>}
        </div>
      </Form.Group>

      <Form.Group controlId="playsWithDogs">
        <Form.Label>4. Plays well with dogs</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="No (score = 1)"
            value="1"
            {...register(`playsWithDogs`, { required: true })}
          />
          <Form.Check
            type="radio"
            label="Yes (score = 0)"
            value="0"
            {...register(`playsWithDogs`, { required: true })}
          />
          {errors.playsWithDogs && <span>This field is required</span>}
        </div>
      </Form.Group>

      <Form.Group controlId="hissesAtStrangers">
        <Form.Label>5. Hisses at strangers</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Yes (score = 1)"
            value="1"
            {...register(`hissesAtStrangers`, { required: true })}

          />
          <Form.Check
            type="radio"
            label="No (score = 0)"
            value="0"
            {...register(`hissesAtStrangers`, { required: true })}
          />
          {errors.hissesAtStrangers && <span>This field is required</span>}
        </div>
      </Form.Group>

      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};
