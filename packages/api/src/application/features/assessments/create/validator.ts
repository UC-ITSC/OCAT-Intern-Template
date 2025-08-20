import Joi from 'joi';
import { CreateAssessmentDTO } from 'src/types';

export const createAssessmentSchema = Joi.object<CreateAssessmentDTO>({

  catDateOfBirth: Joi.date()
    .iso()
    .required()
    .messages({
      'any.required': `Cat date of birth is required`,
      'date.format': `Cat date of birth must be a valid ISO date`,
    }),

  catName: Joi.string()
    .required()
    .messages({
      'any.required': `Cat name is required`,
      'string.empty': `Cat name is required`,
    }),
  instrumentType: Joi.number()
    .integer()
    .min(0)
    .required()
    .messages({
      'any.required': `Instrument type is required`,
    }),

  riskLevel: Joi.string()
    .valid(`low`, `medium`, `high`)
    .required()
    .messages({
      'any.only': `Risk level must be low, medium, or high`,
      'any.required': `Risk level is required`,
    }),

  score: Joi.number()
    .integer()
    .min(0)
    .required()
    .messages({
      'any.required': `Score is required`,
      'number.base': `Score must be a number`,
      'number.integer': `Score must be an integer`,
      'number.min': `Score must be a non-negative integer`,
    }),
});
