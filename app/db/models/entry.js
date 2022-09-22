const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    static associate(models) {
      // define association here
    }
  }

  Entry.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        // !!! Temporary fix for Alsje !!!
        //type: Sequelize.UUID,
        //defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      notes: {
        type: DataTypes.STRING,
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
