const winston = require("winston");

// Basic logging layer. It helps to hide complexity from logic layer. Easy to replace the logging library or maintain the implementation at single place.
const log = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()]
});

const info = message => {
  log.info(message);
};

const error = errMessage => {
  log.log("error", errMessage);
};

const exception = err => {
  log.log("error", err.stack);
};

const logger = {
  info,
  error,
  exception
};

module.exports = logger;
