const messages = require("../utility/messages");
const models = require("../../db/models");

const isNum = num => /^\d+$/.test(num);

// Its a basic implementation of middleware. We can perform user authentication and other security logics here.
const validateRequest = async (req, res, next) => {
  const userId = req.headers.userid;
  if (!userId || !isNum(userId)) {
    res.status(400).json({ message: messages.badRequest });
  } else {
    const user = await models.user.findOne({
      where: {
        id: userId
      },
      attributes: []
    });
    if (!user) {
      res.status(401).json({ message: messages.unauthorizedAccess });
    } else {
      next();
    }
  }
};

module.exports = {
  validateRequest
};
