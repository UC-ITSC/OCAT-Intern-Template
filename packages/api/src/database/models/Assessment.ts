import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize';

export class Assessment extends Model<
InferAttributes<Assessment>,
InferCreationAttributes<Assessment>
> {
  declare public id: CreationOptional<number>;
  declare public score: number;
  declare public riskLevel: string;
  declare public catName: string;
  declare public catDateOfBirth: string;
  declare public createdAt: CreationOptional<Date>;
  declare public updatedAt: CreationOptional<Date>;
  declare public deletedAt: Date | null;

  public static initModel(sequelize: Sequelize): typeof Assessment {
    Assessment.init({
      /* eslint-disable sort-keys */
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      score: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      riskLevel: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      catName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      catDateOfBirth: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
      /* eslint-enable sort-keys */
    }, {
      sequelize,
    });

    return Assessment;
  }
}
