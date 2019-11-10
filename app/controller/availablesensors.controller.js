const logger = require("../utility/logger");
const messages = require("../utility/messages");
const models = require("../../db/models");

// Controller for getting available sensors
const getAvailableSensors = async (req, res) => {
  try {
    const userId = req.headers.userid;
    let sensorsList = await models.sensor.findAll({
      attributes: ["id", "name", "is_allocatable", "is_damaged", "is_private"],
      where: {
        is_allocatable: true,
        is_damaged: false,
        is_private: false
      }
    });
    sensorsList = sensorsList.map(r => r.toJSON());
    let privateSensor = await models.privatesensor.findOne({
      attributes: ["user_id", "sensor_id"],
      include: [
        {
          model: models.sensor,
          attributes: [
            "id",
            "name",
            "is_allocatable",
            "is_damaged",
            "is_private"
          ],
          where: {
            is_damaged: false
          }
        }
      ],
      where: {
        user_id: userId
      }
    });
    if (privateSensor) {
      privateSensor = privateSensor.toJSON();
      sensorsList.push(privateSensor.sensor);
    }
    return res.status(200).json({ sensors: sensorsList });
  } catch (error) {
    logger.exception(error);
    return res.status(500).json({ message: messages.internalServerError });
  }
};

module.exports = {
  getAvailableSensors
};
