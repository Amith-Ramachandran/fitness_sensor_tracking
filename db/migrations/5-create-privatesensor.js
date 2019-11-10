module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("privatesensors", {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "user_id",
        references: {
          model: "users",
          key: "id"
        }
      },
      sensorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "sensor_id",
        references: {
          model: "sensors",
          key: "id"
        }
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable("privatesensors");
  }
};
