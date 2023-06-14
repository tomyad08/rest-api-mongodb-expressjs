const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

module.exports = {
  url: process.env.MONGO_URL,
};
