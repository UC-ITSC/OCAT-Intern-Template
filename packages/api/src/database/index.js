const config = require(`config`);
const pkg = require(`../../package.json`);
const { Sequelize } = require(`sequelize`);
const { initModels } = require(`./models`);

const {
  database,
  dialect,
  host,
  logging,
  password,
  pool,
  port,
  username,
} = config.get(`database`);

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
  // eslint-disable-next-line no-console
  logging: logging ? console.log : false,
  pool,
  port,
});

initModels(sequelize);

module.exports = sequelize;
