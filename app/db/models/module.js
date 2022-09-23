const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    static associate(models) {
      // define association here
    }
  }

  Module.init(
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
      mod_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coordinator: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Module",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Module;
};
