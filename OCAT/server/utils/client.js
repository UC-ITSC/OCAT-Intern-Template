const { createJsonClient } = require(`restify-clients`);
const { config } = require(`../utils`);

module.exports = createJsonClient({
  url: config.api.url,
});
