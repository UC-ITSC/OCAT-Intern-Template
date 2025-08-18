import { IAssessmentRepository } from '../../application/contracts';
import { Assessment as AssessmentType, CreateAssessmentDTO } from '../../types';

export class AssessmentRepository implements IAssessmentRepository {
  public async create(assessmentData: CreateAssessmentDTO): Promise<AssessmentType> {
    // TODO: Implement Create
    return Promise.reject(new Error(`Not implemented`));
  }

  public async findAll(): Promise<AssessmentType[]> {
    // TODO: Implement Find All
    return Promise.reject(new Error(`Not implemented`));
  }

  public async delete(id: number): Promise<boolean> {
    return Promise.reject(new Error(`Not implemented`));
  }
}
