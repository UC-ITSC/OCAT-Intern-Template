import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';
export const NewAssessment = () => {
  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const onSubmit = async (data) => {
    try {
      await AssessmentService.submit(data);
    } catch (e) {
      alert(e.message || `Submit Failed`);
    }
  };
  // react-hook-form setup + wrapper that computes score/risk, then calls onSubmit
  const { formState: { errors }, handleSubmit, register } = useForm({
    defaultValues: {
      instrumentType: 1;//static field
    },
  });

  const handleFormSubmit = async (form) => {
  // calculate both score and risklevel 
    const answers = [ form.q1, form.q2, form.q3, form.q4, form.q5 ].map((n) => Number(n ?? 0));
    const score = answers.reduce((a, b) => a + b, 0); // 0–5
    const riskLevel = score <= 1 ? `low` : score <= 3 ? `medium` : `high`;

    const payload = {
      catDateOfBirth: form.catDateOfBirth,
      catName: form.catName,
      instrumentType: form.instrumentType,
      riskLevel,
      score,

    };
    console.log(`Submitting Payload:`, payload);
    await onSubmit(payload);
  };

  return <Form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
    {/* Instrument Name (static text) */}
    <Form.Group className="mb-3">
      <Form.Label>Instrument Name</Form.Label>
      <Form.Control
        plaintext
        readOnly
        value="Cat Behavioral Instrument"
      />
    </Form.Group>

    {/* Cat Name */}
    <Form.Group className="mb-3">
      <Form.Label>Cat Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="e.g., TestCAT"
        {...register(`catName`, { required: `Cat name is required` })}
        isInvalid={!!errors.catName}
      />
      <Form.Control.Feedback type="invalid">
        {errors.catName?.message}
      </Form.Control.Feedback>
    </Form.Group>
    {/* Cat Date of Birth */}
    <Form.Group className="mb-3">
      <Form.Label>Cat Date of Birth</Form.Label>
      <Form.Control
        type="date"
        {...register(`catDateOfBirth`, { required: `Date of birth is required` })}
        isInvalid={!!errors.catDateOfBirth}
      />
      <Form.Control.Feedback type="invalid">
        {errors.catDateOfBirth?.message}
      </Form.Control.Feedback>
    </Form.Group>

    {/* Five questions, two responses (Yes=1 / No=0) -> score is sum (0–5) */}
    <Form.Group className="mb-3">
      <Form.Label>1) Previous contact with the Cat Judicial System</Form.Label>
      <div>
        <Form.Check
          inline
          type="radio"
          id="q1-no"
          label="No "
          value="0"
          {...register(`q1`, { required: `Required` })}
        />
        <Form.Check
          inline
          type="radio"
          id="q1-yes"
          label="Yes "
          value="1"
          {...register(`q1`, { required: `Required` })}
        />
      </div>
      {errors.q1 && <div className="text-danger small">This question is required.</div>}
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>2) Physical altercations with other cats</Form.Label>
      <div>
        <Form.Check
          inline
          type="radio"
          id="q2-0to3"
          label="0–3 altercations"
          value="0"
          {...register(`q2`, { required: `Required` })}
        />
        <Form.Check
          inline
          type="radio"
          id="q2-3plus"
          label="3+ altercations"
          value="1"
          {...register(`q2`, { required: `Required` })}
        />
      </div>
      {errors.q2 && <div className="text-danger small">This question is required.</div>}
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>3) Physical altercations with owner (scratching, biting, etc...)</Form.Label>
      <div>
        <Form.Check
          inline
          type="radio"
          id="q3-10plus"
          label="10+ altercations "
          value="1"
          {...register(`q3`, { required: `Required` })}
        />
        <Form.Check
          inline
          type="radio"
          id="q3-0to10"
          label="0–10 altercations "
          value="0"
          {...register(`q3`, { required: `Required` })}
        />
      </div>
      {errors.q3 && <div className="text-danger small">This question is required.</div>}
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>4) Plays well with dogs</Form.Label>
      <div>
        <Form.Check
          inline
          type="radio"
          id="q4-no"
          label="No "
          value="1"
          {...register(`q4`, { required: `Required` })}
        />
        <Form.Check
          inline
          type="radio"
          id="q4-yes"
          label="Yes "
          value="0"
          {...register(`q4`, { required: `Required` })}
        />
      </div>
      {errors.q4 && <div className="text-danger small">This question is required.</div>}
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>5) Hisses at strangers</Form.Label>
      <div>
        <Form.Check
          inline
          type="radio"
          id="q5-yes"
          label="Yes"
          value="1"
          {...register(`q5`, { required: `Required` })}
        />
        <Form.Check
          inline
          type="radio"
          id="q5-no"
          label="No"
          value="0"
          {...register(`q5`, { required: `Required` })}
        />
      </div>
      {errors.q5 && <div className="text-danger small">This question is required.</div>}
    </Form.Group>

    <Button variant="primary" type="submit" onClick={handleSubmit(handleFormSubmit)}>Submit</Button>
  </Form>;
};
