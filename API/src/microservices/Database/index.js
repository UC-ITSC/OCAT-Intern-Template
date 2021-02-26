const config = require(`../../utils/Config`);
const pkg = require(`../../../package.json`);

const knex = require(`knex`)({
  client: config.database.dialect,
  connection: {
    host     : config.database.host,
    port     : config.database.port,
    user     : config.database.username,
    password : config.database.password,
    database : config.database.name,
    charset  : `utf8`,
    application_name: pkg.name
  },
  pool: {
    min: config.database.minconnections || 2,
    max: config.database.maxconnections || 10
  },
  debug: false
});

const bookshelf = require(`bookshelf`)(knex);
bookshelf.plugin(`bookshelf-virtuals-plugin`);
bookshelf.plugin(require(`bookshelf-soft-delete`));

const Assessments = bookshelf.Model.extend({
  tableName: `assessments`
});

exports.Assessments = Assessments;