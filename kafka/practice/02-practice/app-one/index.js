require("dotenv").config();
const http = require("http");
const app = require("./app");
const connectToDatabase = require("./db-connection");

const port = process.env.PORT || 3000;

const server = http.createServer(app);

const main = async () => {
  await connectToDatabase()
    .then(() => {
      server.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

main();
