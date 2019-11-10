module.exports = (Sequelize, DataTypes) => {
  const workout = Sequelize.define(
    "workout",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { underscored: true, timestamps: false }
  );
  workout.associate = models => {
    // associations can be defined here
    workout.hasMany(models.participant, {
      foreignKey: "workoutId",
      onDelete: "CASCADE"
    });
  };
  return workout;
};
