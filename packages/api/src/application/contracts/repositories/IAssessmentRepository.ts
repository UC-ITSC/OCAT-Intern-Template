import { Assessment, CreateAssessmentDTO } from '../../../types';

export interface IAssessmentRepository {
  submit(assessment: CreateAssessmentDTO): Promise<Assessment>;
  getList(): Promise<Assessment[]>;
  delete(id: number): Promise<boolean>;
}

export const IAssessmentRepository = Symbol.for(`IAssessmentRepository`);
