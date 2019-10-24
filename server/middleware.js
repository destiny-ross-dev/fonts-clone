const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan-body");

const globalMiddleware = app => {
  // parses url-encoded data (parameters) with the querystring library when true.
  app.use(bodyParser.urlencoded({ extended: false }));

  // Parses req.body, making it readable on the request object
  app.use(bodyParser.json());

  // Parses cookies
  app.use(cookieParser());

  // Enables Cross Origin Resource Sharing
  app.use(cors());

  //Logging middleware for request and response bodies
  // logger(app);
};

module.exports = { globalMiddleware };
