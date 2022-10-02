const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Entry extends Model {}

  Entry.init(
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.literal("uuid_generate_v4()"),
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Entry",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Entry;
};
