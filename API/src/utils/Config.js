const fs = require(`fs`);
const appRoot = require(`app-root-path`);

const CONFIG_FILE_PATH = `${appRoot}/config.json`;
let config = {};
let server = {};

if (fs.existsSync(CONFIG_FILE_PATH)) {
  config = JSON.parse(fs.readFileSync(CONFIG_FILE_PATH, `utf8`));

  ({ server } = config);
}

module.exports = {
  database: {
    dialect: process.env.DATABASE_DIALECT || `pg`,
    host: process.env.DATABASE_HOST || `localhost`,
    minconnections: process.env.DATABASE_MINCONNECTIONS || 2,
    name: process.env.DATABASE_NAME || `risk`,
    password: process.env.DATABASE_PASSWORD || `paul`,
    port: process.env.DATABASE_PORT || 5432,
    username: process.env.DATABASE_USERNAME || `postgres`,
  },
  server: {
    port: server.port || 3000,
  },
};
