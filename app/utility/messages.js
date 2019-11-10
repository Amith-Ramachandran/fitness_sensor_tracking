const messages = Object.freeze({
  internalServerError: "Inter server error occured",
  badRequest: "Bad Request",
  serverStart: "Server running at port",
  serverStartFailed:
    "Failed to start the service, encountered errors. Exiting!",
  uncaughtException: "Uncaught Exception. Exiting. Error:",
  unauthorizedAccess: "unauthorized access."
});

module.exports = messages;
