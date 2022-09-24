const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Requirement extends Model {
    static associate(models) {
      // define association here
    }
  }

  Requirement.init(
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
    },
    {
      sequelize,
      modelName: "Requirement",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Requirement;
};
