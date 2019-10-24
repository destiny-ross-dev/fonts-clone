const merge = require("lodash.merge");
const env = process.env.NODE_ENV || "dev";

const baseConfig = {
  env,
  port: process.env.PORT || 4568,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: "100d",
    session: process.env.SESSION_SECRET,
    gFontsKey: process.env.GOOGLE_FONTS_API_KEY
  },

  db: process.env.CONNECTION_STRING
};

let envConfig = {};

switch (env) {
  case "dev":
  case "development":
    envConfig = require("./dev").config;
    break;
  case "test":
  case "testing":
    envConfig = require("./testing").config;
    break;
  case "prod":
  case "production":
    envConfig = require("./prod").config;
    break;
  default:
    envConfig = require("./dev").config;
}
module.exports = merge(baseConfig, envConfig);
