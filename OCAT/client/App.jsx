import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { DashboardBulletin } from './pages/Dashboard/DashboardBulletin';
import { AssessmentNew } from './pages/Assessments/NewAssessment.jsx';
import { AssessmentList } from './pages/Assessments/AssessmentList';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => <>
  <BrowserRouter>
    <Route path="/" component={DashboardBulletin} />
    <Route path="/assessment/new" component={AssessmentNew} />
    {/* <Route path="/assessment/list" component={AssessmentList} /> */}
  </BrowserRouter>
</>;
