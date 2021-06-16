const { client, config } = require(`../../utils`);
const { InternalServerError } = require(`restify-errors`);

exports.submit = (assessment) => new Promise((resolve, reject) => {
  // this function sends a request to the API
  // finish the logic to handle the response when returned from the API
  client.METHOD(`/some-url`,
    (err, req, res, body) => {
      if (err) {
        return reject(err);
      }

      if (res.statusCode !== 200) {
        return reject(new InternalServerError(`Request Error`));
      }

      resolve(body.data);
    });
});

exports.getList = () => new Promise((resolve, reject) => {
  // this function sends a request to the API
  // finish the logic to handle the response when returned from the API
  client.METHOD(`/some-url`,
    (err, req, res, body) => {
      if (err) {
        return reject(err);
      }

      if (res.statusCode !== 200) {
        return reject(new InternalServerError(`Request Error`));
      }

      resolve(body.data);
    });
});
