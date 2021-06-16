import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { SiteWrapper } from './components';
import { DashboardBulletin } from './pages/Dashboard/DashboardBulletin';
import { NewAssessment } from './pages/Assessments/NewAssessment.jsx';
import { AssessmentList } from './pages/Assessments/AssessmentList';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => <SiteWrapper>
  <BrowserRouter>
    <Route path="/" component={DashboardBulletin} />
    <Route path="/assessment/new" component={NewAssessment} />

  </BrowserRouter>
</SiteWrapper>;
