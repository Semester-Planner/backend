const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Module extends Model {
    static associate(models) {
      this.belongsToMany(models.User, {
        through: models.UserModule,
        foreignKey: "moduleId",
      });
      this.belongsToMany(models.Requirement, {
        through: models.ModuleRequirement,
        foreignKey: "moduleId",
      });
    }
  }

  Module.init(
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
      mod_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      department: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      coordinator: {
        type: Sequelize.STRING,
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
