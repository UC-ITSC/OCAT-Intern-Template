import { Assessment, CreateAssessmentDTO } from '../../../types';

export interface IAssessmentRepository {
  create(assessment: CreateAssessmentDTO): Promise<Assessment>;
  findAll(): Promise<Assessment[]>;
  delete(id: number): Promise<boolean>;
}

export const IAssessmentRepository = Symbol.for(`IAssessmentRepository`);
