import { inject, injectable } from 'inversify';
import { IUseCase } from 'src/types/shared';
import { Assessment, CreateAssessmentDTO } from 'src/types';
import { IAssessmentRepository } from '../../../contracts';

@injectable()
export class CreateAssessmentUseCase implements IUseCase<CreateAssessmentDTO, Assessment> {
  public constructor(
    @inject(IAssessmentRepository) private assessmentRepository: IAssessmentRepository,
  ) {}

  public async execute(assessmentData: CreateAssessmentDTO): Promise<Assessment> {
    // TODO: Implement business validation logic here
    // HINT: Validate that the score is between 0 and 5
    // HINT: Validate that the risk level matches the score calculation

    // TODO: Create the assessment using the repository
    // HINT: use this.assessmentRepository.create(assessmentData)
    return Promise.reject(new Error(`CreateAssessmentUseCase.execute() not implemented yet`));
  }

  // TODO: Add private helper methods for validation and risk level calculation
}
