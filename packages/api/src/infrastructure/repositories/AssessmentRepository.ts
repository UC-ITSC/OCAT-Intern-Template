import { IAssessmentRepository } from '../../application/contracts';
import { Assessment as AssessmentType, CreateAssessmentDTO } from '../../types';
import { Assessment } from '../sequelize/models';

export class AssessmentRepository implements IAssessmentRepository {
  public async create(assessmentData: CreateAssessmentDTO): Promise<AssessmentType> {
    // TODO: Implement Create
    const created = await Assessment.create({
      catDateOfBirth: assessmentData.catDateOfBirth,
      catName: assessmentData.catName,
      instrumentType: assessmentData.instrumentType,
      riskLevel: assessmentData.riskLevel,
      score: assessmentData.score,
    });

    // Return plain object matching the Assessment type
    return created.get({ plain: true }) as unknown as AssessmentType;
  }

  public async findAll(): Promise<AssessmentType[]> {
    // TODO: Implement Find All
    const rows = await Assessment.findAll({
      order: [[ `createdAt`, `DESC` ]],
      where: { deletedAt: null as any }, // soft-delete filter for later use Task2
    });

    return rows.map((r) => r.get({ plain: true })) as unknown as AssessmentType[];
  }

  public async delete(id: number): Promise<boolean> {
    const [ count ] = await Assessment.update(
      { deletedAt: new Date() },
      { where: { id } },
    );
    return count > 0;
  }
}
