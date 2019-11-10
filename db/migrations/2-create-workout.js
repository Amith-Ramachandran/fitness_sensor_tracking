module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("workouts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable("workouts");
  }
};
