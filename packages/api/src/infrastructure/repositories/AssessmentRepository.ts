import { IAssessmentRepository } from '../../application/contracts';
import { Assessment as AssessmentType, CreateAssessmentDTO } from '../../types';

export class AssessmentRepository implements IAssessmentRepository {
  public async submit(assessmentData: CreateAssessmentDTO): Promise<AssessmentType> {
    // TODO: Implement Create
    return Promise.reject(new Error(`Not implemented`));
  }

  public async getList(): Promise<AssessmentType[]> {
    // TODO: Implement Get List
    return Promise.reject(new Error(`Not implemented`));
  }

  public async delete(id: number): Promise<boolean> {
    return Promise.reject(new Error(`Not implemented`));
  }
}
