module.exports = (sequelize, DataTypes) => {
  const sensor = sequelize.define(
    "sensor",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      is_allocatable: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      is_damaged: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      is_private: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      }
    },
    {}
  );
  sensor.associate = models => {
    // associations can be defined here
    sensor.hasMany(models.privatesensor, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });

    sensor.hasOne(models.participant, {
      foreignKey: "sensorId",
      onDelete: "CASCADE"
    });
  };
  return sensor;
};
