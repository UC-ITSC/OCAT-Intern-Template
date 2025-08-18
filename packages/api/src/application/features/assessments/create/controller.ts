import { injectable } from 'inversify';
import { Request } from 'express';
import { CreateAssessmentDTO } from 'src/types';
import { BaseController } from '../../../../infrastructure/http/BaseController';
import { CreateAssessmentUseCase } from './useCase';
import { createAssessmentSchema } from './validator';

@injectable()
export class CreateAssessmentController extends BaseController {
  public constructor(
    private createAssessmentUseCase: CreateAssessmentUseCase,
  ) {
    super();
  }

  protected async executeImpl(req: Request): Promise<any> {
    const dto = createAssessmentSchema.validate(req.body);

    if (dto.error) {
      throw new Error(`Validation error: ${dto.error.message}`);
    }

    const assessment = await this.createAssessmentUseCase.execute(dto.value as CreateAssessmentDTO);

    return assessment;
  }
}
