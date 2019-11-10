const express = require("express");
const bodyParser = require("body-parser");

const { config } = require("./config/app.config");
const logger = require("./app/utility/logger");
const messages = require("./app/utility/messages");

const router = express();

router.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));

router.use(bodyParser.json({ limit: "1mb", extended: true }));

router.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept"
  );
  next();
});

process
  .on("uncaughtException", async err => {
    logger.error(`${messages.uncaughtException} ${err}`);
    process.exit(1);
  })
  .on("unhandledRejection", async (reason, promise) => {
    const promiseString = JSON.stringify(promise);
    logger.error(
      `Unhandled Rejection at ${promiseString} . Exiting. ${reason}`
    );
    process.exit(1);
  });

// Webhook route included here
require("./app/routes/app.routes.js")(router);

// Application bootrap logic
const startApplication = async () => {
  try {
    const port = config.get("port");
    router.listen(port, async () => {
      logger.info(`${messages.serverStart} ${port}`);
    });
  } catch (error) {
    logger.error(messages.serverStartFailed);
    process.exit(1);
  }
};

startApplication();
