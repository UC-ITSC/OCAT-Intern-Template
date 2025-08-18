import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SiteWrapper } from './components';
import { DashboardBulletin } from './pages/Dashboard/DashboardBulletin';
import { NewAssessment } from './pages/Assessments/NewAssessment.jsx';
import { AssessmentList } from './pages/Assessments/AssessmentList';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    element: <SiteWrapper>
      <DashboardBulletin />
    </SiteWrapper>,
    path: `/`,
  },
  {
    element: <SiteWrapper>
      <NewAssessment />
    </SiteWrapper>,
    path: `/assessment/new`,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
