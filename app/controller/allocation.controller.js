const logger = require("../utility/logger");
const messages = require("../utility/messages");
const models = require("../../db/models");

// Controller for getting current allcations
const getAllocatedSensors = async (req, res) => {
  try {
    const workoutId = req.params.workout_id;
    const allocationsList = [];
    let response = await models.user.findAll({
      include: [
        {
          model: models.privatesensor,
          attributes: ["sensor_id"]
        },
        {
          model: models.participant,
          attributes: ["sensor_id"],
          where: { workout_id: workoutId }
        }
      ],
      attributes: ["id", "name"]
    });
    response = response.map(r => r.toJSON());
    response.forEach(user => {
      const data = {
        user_id: user.id,
        sensor_is_user_property: !!user.privatesensor,
        sensor_id: user.participants[0].sensor_id
      };
      allocationsList.push(data);
    });
    return res.status(200).json({ allocations: allocationsList });
  } catch (error) {
    logger.exception(error);
    return res.status(500).json({ message: messages.internalServerError });
  }
};

module.exports = {
  getAllocatedSensors
};
