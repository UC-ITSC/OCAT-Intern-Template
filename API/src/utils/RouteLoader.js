const path = require(`path`);
const find = require(`find`);
const appRoot = require(`app-root-path`);

const ROUTE_BASE = path.resolve(`${appRoot}/src/routes`);

function getDirectories(srcpath) {
  return find.dirSync(srcpath);
}

exports.load = function(server) {
  const directories = getDirectories(ROUTE_BASE);

  directories.forEach((directory) => {
    require(`${directory}`)(server);
  });
};
