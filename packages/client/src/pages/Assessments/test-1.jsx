import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';

const questions = [
  {
    label: `Previous contact with the Cat Judicial System`,
    name: `Previous contact with the Cat Judicial System`,
    options: [
      { label: `No (score = 0)`, value: `0` },
      { label: `Yes (score = 1)`, value: `1` },
    ],
  },
  {
    label: `Physical altercations with other cats`,
    name: `Physical altercations with other cats`,
    options: [
      { label: `0-3 altercations (score = 0)`, value: `0` },
      { label: `3+ altercations (score = 1)`, value: `1` },
    ],
  },
  {
    label: `Physical altercations with owner (scratching, biting, etc...)`,
    name: `Physical`,
    options: [
      { label: `10+ altercations (score = 1)`, value: `0` },
      { label: `0-10 altercations (score = 0)`, value: `1` },
    ],
  },
  {
    label: `Plays well with dogs`,
    name: `Dogs`,
    options: [
      { label: `No (score = 1)`, value: `1` },
      { label: `Yes (score = 0)`, value: `0` },
    ],
  },
  {
    label: `Hisses at strangers`,
    name: `Hisses`,
    options: [
      { label: `Yes (score = 1)`, value: `1` },
      { label: `No (score = 0)`, value: `0` },
    ],
  },
];
export const NewAssessment = () => {
  const { control, handleSubmit } = useForm();
  const [ totalScore, setTotalScore ] = useState(0);

  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  const handleScoreChange = (name, value) => {
    const score = parseInt(value);
    setTotalScore((prevScore) => prevScore + score);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: `100vh` }}>
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
        {questions.map((question, index) =>
          <React.Fragment key={index}>
            <label htmlFor={question.name}>
              {`${index + 1}. ${question.label}`};
            </label>
            <div>
              <Controller
                control={control}
                name={question.name}
                render={({ field }) =>
                  <>
                    {question.options.map((option) =>
                      <React.Fragment key={option.value}>
                        <input
                          type="radio"
                          value={option.value}
                          {...field}
                          onChange={(e) => handleScoreChange(question.name, e.target.value)}
                        />
                        {` `}
                        {option.label}
                      </React.Fragment>)}
                  </>}
              />
            </div>
            <h1> </h1>
          </React.Fragment>)}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <h3>Total Score: {totalScore}</h3>
      </Form>
    </div>
  );
};
