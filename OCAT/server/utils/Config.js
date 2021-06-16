const fs = require(`fs`);
const appRoot = require(`app-root-path`);

try {
  const configFile = fs.readFileSync(`${appRoot}/config.json`, `utf8`);

  const config = JSON.parse(configFile);

  module.exports = config;
} catch (err) {
  module.exports = {
    api: {
      url: process.env.API_URL || `localhost:3000`, // required
    },
    name: process.env.NAME || `Catfire`,
    server: {
      port: process.env.PORT || 8000,
    },
  };
}
