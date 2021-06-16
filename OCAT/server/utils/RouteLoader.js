const fs = require(`fs`);
const path = require(`path`);
const appRoot = require(`app-root-path`);

const getDirectories = (srcpath) =>
  fs.readdirSync(srcpath)
    .filter((file) => fs.statSync(path.join(srcpath, file)).isDirectory());
const DEFAULT_ROUTES_DIR = `${appRoot}/server/routes`;

module.exports = (app, routeDirectoryPath = DEFAULT_ROUTES_DIR) => new Promise((resolve, reject) => {
  if (!app) {
    return reject(`No app provided`);
  }

  if (!routeDirectoryPath) {
    return reject(`No path provided`);
  }

  const routeDirectories = getDirectories(routeDirectoryPath);

  routeDirectories.forEach(route => {
    const routerPath = path.resolve(`${routeDirectoryPath}/${route}`);
    const router = require(routerPath);

    const params = [ router.path ];

    params.push(router.router);

    app.use.apply(app, params);
  });

  resolve();
});
