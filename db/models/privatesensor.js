module.exports = (Sequelize, DataTypes) => {
  const privatesensor = Sequelize.define(
    "privatesensor",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "user_id",
        references: {
          model: "users",
          key: "id"
        }
      },
      sensorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "sensor_id",
        references: {
          model: "sensors",
          key: "id"
        }
      }
    },
    { timestamps: false }
  );
  privatesensor.associate = models => {
    // associations can be defined here
    privatesensor.belongsTo(models.user, {
      foreignKey: "userId"
    });

    privatesensor.belongsTo(models.sensor, {
      foreignKey: "sensorId"
    });
  };
  return privatesensor;
};
