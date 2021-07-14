const { createJsonClient } = require(`restify-clients`);
const config = require(`./Config`);

module.exports = createJsonClient({
  url: config.api.url,
});
