import { Options, Sequelize } from 'sequelize';
import config from 'config';
import pkg from '../../../package.json';

const {
  database,
  dialect,
  host,
  logging,
  password,
  pool,
  port,
  username,
} = config.get<Options>(`database`);

const sequelize = new Sequelize(database, username, password, {
  define: {
    underscored: true,
  },
  dialect,
  dialectOptions: {
    application_name: pkg.name,
    multipleStatements: true,
    useUTC: true,
  },
  host,
  logging: logging ? console.log : false,
  pool,
  port,
});

export default sequelize;
