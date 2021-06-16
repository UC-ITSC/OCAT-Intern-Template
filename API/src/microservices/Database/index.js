const { config } = require(`../../utils`);
const pkg = require(`../../../package.json`);

const knex = require(`knex`)({
  client: config.database.dialect,
  connection: {
    application_name: pkg.name,
    charset: `utf8`,
    database: config.database.name,
    host: config.database.host,
    password: config.database.password,
    port: config.database.port,
    user: config.database.username,
  },
  debug: false,
  pool: {
    max: config.database.maxconnections || 10,
    min: config.database.minconnections || 2,
  },
});

const bookshelf = require(`bookshelf`)(knex);
bookshelf.plugin(`bookshelf-virtuals-plugin`);
bookshelf.plugin(require(`bookshelf-soft-delete`));

const Assessments = bookshelf.Model.extend({
  tableName: `assessments`,
});

exports.Assessments = Assessments;
