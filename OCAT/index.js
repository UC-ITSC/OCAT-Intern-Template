const express = require(`express`);
const app = express();
const server = require(`http`).Server(app);

const { ErrorHandler, IndexRoute, RouteLoader, config } = require(`./server/utils`);

const favicon = require(`serve-favicon`);
const compression = require(`compression`);

app.use(compression());
app.use(favicon(`${__dirname}/public/img/favicon.ico`));
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set(`view engine`, `ejs`);
app.set(`views`, `${__dirname}/views`);

app.use(`/public`, (req, res) => {
  res
    .status(404)
    .send(`resource not found`);
});

RouteLoader(app)
  .then(() => {
    app.all(`/*`, IndexRoute);
    app.use(ErrorHandler);

    // eslint-disable-next-line no-console
    server.listen(config.server.port, console.log(`Listening on port: ${config.server.port}!`));
  })
  .catch((err) => {
    if (process.env.NODE_ENV !== `production`) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
    process.exit(1);
  });
