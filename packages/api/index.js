const { createServer, plugins, pre } = require(`restify`);
const config = require(`config`);

const pkg = require(`./package.json`);
const { ErrorHandler, RouteLoader } = require(`./src/utils`);

const corsMiddleware = require(`restify-cors-middleware`);
const uuid = require(`uuid`);

const server = createServer({
  ignoreTrailingSlash: true,
  name: pkg.name,
  version: pkg.version,
});

new ErrorHandler(server);

const cors = corsMiddleware({
  allowHeaders: [ `ims-application` ],
  exposeHeaders: [],
  origins: [ `*` ],
  preflightMaxAge: 5,
});

server.pre(cors.preflight);
server.use(cors.actual);

server.use((req, res, next) => {
  req.id = uuid.v4();
  next();
});

server.use(pre.sanitizePath());
server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.dateParser());
server.use(plugins.queryParser({ mapParams: true }));
server.use(plugins.jsonp());
server.use(plugins.gzipResponse());
server.use(plugins.bodyParser({ mapParams: true }));

RouteLoader.load(server);

if (require.main === module) {
  const port = config.get(`server.port`);
  // eslint-disable-next-line no-console
  server.listen(port, console.log(`Listening on port: ${port}`));
} else {
  module.exports = server;
}
