module.exports = (Sequelize, DataTypes) => {
  const user = Sequelize.define(
    "user",
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
  user.associate = models => {
    // associations can be defined here
    user.hasMany(models.participant, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });

    user.hasOne(models.privatesensor, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return user;
};
