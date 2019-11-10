module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("sensors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      is_allocatable: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      is_damaged: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      is_private: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable("sensors");
  }
};
