module.exports = (Sequelize, DataTypes) => {
  const participant = Sequelize.define(
    "participant",
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
      workoutId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "workout_id",
        references: {
          model: "workouts",
          key: "id"
        }
      },
      sensorId: {
        type: DataTypes.INTEGER,
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
  participant.associate = models => {
    // associations can be defined here
    participant.belongsTo(models.user, {
      foreignKey: "userId"
    });

    participant.belongsTo(models.workout, {
      foreignKey: "workoutId"
    });

    participant.belongsTo(models.sensor, {
      foreignKey: "sensorId"
    });
  };
  return participant;
};
