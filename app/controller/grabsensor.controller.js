const logger = require("../utility/logger");
const messages = require("../utility/messages");
const models = require("../../db/models");

// Controller for choosing sensors from available list
const grabSensor = async (req, res) => {
  try {
    const sensorId = req.params.sensor_id;
    const sensorStatus = req.body;

    await models.sensor.update(
      {
        is_allocatable: sensorStatus.is_allocatable,
        is_damaged: sensorStatus.is_damaged
      },
      { where: { id: sensorId } }
    );
    return res.status(200).json({ message: "sensor status updated" });
  } catch (error) {
    logger.exception(error);
    return res.status(500).json({ message: messages.internalServerError });
  }
};

module.exports = {
  grabSensor
};
