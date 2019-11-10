module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("participants", {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "user_id",
        references: {
          model: "users",
          key: "id"
        }
      },
      workoutId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "workout_id",
        references: {
          model: "workouts",
          key: "id"
        }
      },
      sensorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "sensor_id",
        references: {
          model: "sensors",
          key: "id"
        }
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable("participants");
  }
};
