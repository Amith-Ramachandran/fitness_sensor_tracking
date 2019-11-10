const { getAllocatedSensors } = require("../controller/allocation.controller");
const {
  getAvailableSensors
} = require("../controller/availablesensors.controller");
const {
  validateRequest
} = require("../middleware/request.validator.middleware");

// Exposed routes listed here

module.exports = function routes(router) {
  router
    .route("/allocations/:workout_id")
    .get(validateRequest, getAllocatedSensors);
  router.route("/availabe_sensors").get(validateRequest, getAvailableSensors);
};
