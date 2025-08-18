import 'reflect-metadata';
import { Container } from 'inversify';
import { IAssessmentRepository, IPasswordService } from '../../application/contracts';
import { AssessmentRepository } from '../repositories/AssessmentRepository';
// import { UserRepository } from '../repositories/UserRepository';
import { PasswordService } from '../../application/services/PasswordService';
import { createLogger, Logger } from '../logging/logger';
import { CreateAssessmentUseCase } from '../../application/features/assessments/create/useCase';
import { GetAssessmentListUseCase } from '../../application/features/assessments/getList/useCase';
import { CreateAssessmentController } from '../../application/features/assessments/create/controller';
import { GetAssessmentListController } from '../../application/features/assessments/getList/controller';

// Simple DI container implementation
const container = new Container();

// Initialize singletons
const logger = createLogger();

// Bind logger
container.bind(Logger).toConstantValue(logger);

// Bind repositories
container.bind(IAssessmentRepository).to(AssessmentRepository);
// container.bind(IUserRepository).to(UserRepository);

// Bind use cases
container.bind(CreateAssessmentUseCase).toSelf();
container.bind(GetAssessmentListUseCase).toSelf();

// Bind controllers
container.bind(CreateAssessmentController).toSelf();
container.bind(GetAssessmentListController).toSelf();

// Bind services
container.bind(IPasswordService).to(PasswordService);

export { container };
