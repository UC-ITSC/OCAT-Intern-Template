/*import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const onSubmit = async (data) => {
    console.log('Submitting assessment data: ', data);
    try {
      await AssessmentService.submit(data);
      console.log('Assessment submitted successfully');
    } catch (error) {
      console.error('Error submitting assessment:', error);
    }
    //await AssessmentService.submit(data);

  return <Form>
    <div>
      <h1>Cat Assessment Info</h1>
      <h2>Instrument</h2>
      <ul>
        <li>
          <Form.Group className="mb-3" controlId="catbehavior">
            <Form.Label>Cat Behavioral Instrument</Form.Label>
            <Form.Control as="textarea" placeholder="Enter text" rows={1} />
          </Form.Group>
        </li>
      </ul>
    </div>

    <div>
      <h2>Cat Details</h2>
      <ul>
        <li>
          <Form.Group className="mb-3" controlId="catname">
            <Form.Label>Cat Name</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
        </li>
        <li>
          <Form.Group className="mb-3" controlId="dateofbirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" placeholder="Enter text" />
          </Form.Group>
        </li>
      </ul>
    </div>

    <div>
      <h2>Questions & Responses</h2>
      <ol>
        <li>
          <Form.Group className="mb-3" controlId="question1">
            <Form.Label>Previous contact with the Cat Judicial System</Form.Label>
            <Form.Check type="radio"
              label="No (score = 0)"
              name="question1"
              id="question1-1" />
            <Form.Check type="radio"
              label="Yes (score = 1)"
              name="question1"
              id="question1-2" />
          </Form.Group>
        </li>
        <li>
          <Form.Group className="mb-3" controlId="question2">
            <Form.Label>Physical alterations with other cats</Form.Label>
            <Form.Check type="radio"
              label="No (score = 0)"
              name="question2"
              id="question2-1" />
            <Form.Check type="radio"
              label="Yes (score = 1)"
              name="question2"
              id="question2-2" />
          </Form.Group>
        </li>
        <li>
          <Form.Group className="mb-3" controlId="question3">
            <Form.Label>Physical altercations with owner (scratching, biting, etc...)</Form.Label>
            <Form.Check
              type="radio"
              label="10+ altercations (score = 1)"
              name="question3"
              id="question3-1"
            />
            <Form.Check
              type="radio"
              label="0-10 altercations (score = 0)"
              name="question3"
              id="question3-2"
            />
          </Form.Group>
        </li>
        <li>
          <Form.Group className="mb-3" controlId="question4">
            <Form.Label>Plays well with dogs</Form.Label>
            <Form.Check
              type="radio"
              label="No (score = 1)"
              name="question4"
              id="question4-1"
            />
            <Form.Check
              type="radio"
              label="Yes (score = 0)"
              name="question4"
              id="question4-2"
            />
          </Form.Group>
        </li>
        <li>
          <Form.Group className="mb-3" controlId="question5">
            <Form.Label>Hisses at strangers</Form.Label>
            <Form.Check
              type="radio"
              label="Yes (score = 1)"
              name="question5"
              id="question5-1"
            />
            <Form.Check
              type="radio"
              label="No (score = 0)"
              name="question5"
              id="question5-2"
            />
          </Form.Group>
        </li>
      </ol>
    </div>

    <div>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    </div>

    <Button variant="primary" type="submit">Submit</Button>
  </Form>;
};
