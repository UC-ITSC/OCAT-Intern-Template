
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
const { control, handleSubmit } = useForm();
const [totalScore, setTotalScore] = useState(0);

const onSubmit = async (data) => {
await AssessmentService.submit(data);
};

const handleScoreChange = (name, value) => {
// Assuming each question has a binary score (0 or 1)
const score = parseInt(value);
setTotalScore((prevScore) => prevScore + score);
};

return (
<div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
<Form onSubmit={handleSubmit(onSubmit)}>
<h1>Cat Behavioral Instrument</h1>
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
<label htmlFor="previous-contact">
1. Previous contact with the Cat Judicial System
</label>
<div>
<Controller
control={control}
name="Previous contact with the Cat Judicial System"
render={({ field }) => (
<>
<input
type="radio"
id="previous-contact"
value="0"
{...field}
onChange={(e) => handleScoreChange(field.name, e.target.value)}
/>
{' '}
No (score = 0)
<input
type="radio"
id="previous-contact"
value="1"
{...field}
onChange={(e) => handleScoreChange(field.name, e.target.value)}
/>
{' '}
Yes (score = 1)
</>
)}
/>
</div>

<h1> </h1>
<Button variant="primary" type="submit">Submit</Button>
<h3>Total Score: {totalScore}</h3>
</Form>
</div>
);
);
