const config = require(`config`);
const pkg = require(`../../../package.json`);

const knex = require(`knex`)({
  client: config.get(`database.dialect`),
  connection: {
    application_name: pkg.name,
    charset: `utf8`,
    database: config.get(`database.name`),
    host: config.get(`database.host`),
    password: config.get(`database.password`),
    port: config.get(`database.port`),
    user: config.get(`database.username`),
  },
  debug: false,
  pool: {
    max: config.get(`database.maxConnections`),
    min: config.get(`database.minConnections`),
  },
});

const bookshelf = require(`bookshelf`)(knex);
bookshelf.plugin(`bookshelf-virtuals-plugin`);
bookshelf.plugin(require(`bookshelf-soft-delete`));

const Assessments = bookshelf.Model.extend({
  tableName: `assessments`,
});

exports.Assessments = Assessments;
