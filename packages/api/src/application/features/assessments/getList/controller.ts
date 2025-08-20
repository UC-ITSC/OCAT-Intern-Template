import { injectable } from 'inversify';
import { Request } from 'express';
import { Assessment } from 'src/types';
import { BaseController } from '../../../../infrastructure/http/BaseController';
import { GetAssessmentListUseCase } from './useCase';

@injectable()
export class GetAssessmentListController extends BaseController {
  public constructor(
    private getAssessmentListUseCase: GetAssessmentListUseCase,
  ) {
    super();
  }

  protected async executeImpl(req: Request): Promise<Assessment[]> {
    return this.getAssessmentListUseCase.execute();
  }
}
