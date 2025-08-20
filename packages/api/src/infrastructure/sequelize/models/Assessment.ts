import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../connection';

export class Assessment extends Model<
  InferAttributes<Assessment>,
  InferCreationAttributes<Assessment>
> {
  declare public id: CreationOptional<number>;
  declare public instrumentType: number;
  declare public score: number;
  declare public riskLevel: string;
  declare public catName: string;
  declare public catDateOfBirth: string;
  declare public createdAt: CreationOptional<Date>;
  declare public updatedAt: CreationOptional<Date>;
  declare public deletedAt: Date | null;
}

Assessment.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    autoIncrementIdentity: true,
    field: `id`,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  catDateOfBirth: {
    allowNull: false,
    field: `cat_date_of_birth`,
    type: DataTypes.DATEONLY,
  },
  catName: {
    allowNull: false,
    field: `cat_name`,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    field: `created_at`,
    type: DataTypes.DATE,
  },
  deletedAt: {
    field: `deleted_at`,
    type: DataTypes.DATE,
  },
  instrumentType: {
    allowNull: false,
    field: `instrument_type`,
    type: DataTypes.STRING,
  },
  riskLevel: {
    allowNull: false,
    field: `risk_level`,
    type: DataTypes.STRING,
  },
  score: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  updatedAt: {
    allowNull: false,
    field: `updated_at`,
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  tableName: `assessments`,
});
