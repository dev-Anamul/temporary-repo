require("dotenv").config();

const createConnectionUrl = () => {
  let url = process.env.DB_CONNECTION_URL;
  url = url.replace("<USER>", process.env.DB_USERNAME);
  url = url.replace("<PASSWORD>", process.env.DB_PASSWORD);
  return url;
};

module.exports = createConnectionUrl;
