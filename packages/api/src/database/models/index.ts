import type { Sequelize } from 'sequelize';
import { Assessment } from './Assessment';

export {
  Assessment,
};

export function initModels(sequelize: Sequelize) {
  Assessment.initModel(sequelize);
}
