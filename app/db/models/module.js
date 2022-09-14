const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    static associate(models) {
      // define association here
    }
  }

  Module.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mod_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mandatory: {
        type: DataTypes.BOOL,
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
