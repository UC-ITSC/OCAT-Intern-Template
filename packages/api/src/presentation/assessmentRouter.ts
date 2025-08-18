import { Router } from 'express';
import { CreateAssessmentController } from '../application/features/assessments/create/controller';
import { GetAssessmentListController } from '../application/features/assessments/getList/controller';
import { container } from '../infrastructure/di/container';

const assessmentRouter = Router();

const createAssessmentController = container.get(CreateAssessmentController);
const getAssessmentListController = container.get(GetAssessmentListController);

// POST /api/assessments - Create assessment
assessmentRouter.post(
  `/`,
  createAssessmentController.execute,
);

// GET /api/assessments - Get assessment list
assessmentRouter.get(
  `/`,
  getAssessmentListController.execute,
);

export { assessmentRouter };
