import { error } from 'console';
import { inject, injectable } from 'inversify';
import { IUseCase } from 'src/types/shared';
import { Assessment, CreateAssessmentDTO } from 'src/types';
import { NUMBER } from 'sequelize';
import { IAssessmentRepository } from '../../../contracts';

@injectable()
export class CreateAssessmentUseCase implements IUseCase<CreateAssessmentDTO, Assessment> {
  public constructor(
    @inject(IAssessmentRepository) private assessmentRepository: IAssessmentRepository,
  ) {}

  public async execute(assessmentData: CreateAssessmentDTO): Promise<Assessment> {
    const dto = this.normalize(assessmentData);

    this.assertValidScore(dto.score);
    this.assertValidInstrumentType(dto.instrumentType);
    this.assertValidCatName(dto.catName);
    this.assertValidDob(dto.catDateOfBirth);

    const expectedRisk = this.computeRisk(dto.score);
    this.assertRiskMatchesScore(dto.riskLevel, expectedRisk);

    return this.assessmentRepository.create(dto);
  }
  // Adding private helper methods for validation and risk level calculation

  private computeRisk(score: number): `low` | `medium` | `high` {
    if (score <= 1) {
      return `low`;
    }
    if (score <= 3) {
      return `medium`;
    }
    return `high`;
  }

  private assertValidInstrumentType(instrumentType: number): void {
    if (!Number.isInteger(instrumentType) || instrumentType < 1) {
      throw new Error(`instrumentType should be a positive number`);
    }
  }

  private assertValidScore(score: number): void {
    if (!Number.isInteger(score) || score < 0 || score > 5) {
      throw new Error(`Score must be Integer between 0 and 5`);
    }
  }

  private assertValidCatName(name: string): void {
    if (typeof name !== `string` || name.trim().length === 0) {
      throw new Error(`catName is required`);
    }
  }

  private assertValidDob(value: string | Date): void {
    const d = new Date(value as any);
    if (Number.isNaN(d.valueOf())) {
      throw new Error(`catDateOfBirth must be a valid date`);
    }
    const now = new Date();
    if (d > now) {
      throw new Error(`catDateOfBirth cannot be a future value`);
    }
  }

  private assertRiskMatchesScore(actual: string, expected: `low` | `medium` | `high`): void {
    if (actual !== expected) {
      throw new Error(`Risk level "${actual}" does not match score (expected "${expected}")`);
    }
  }

  private normalize(dto: CreateAssessmentDTO): CreateAssessmentDTO {
    return {
      ...dto,
      catName: (dto.catName ?? ``).trim(),
    };
  }
}
