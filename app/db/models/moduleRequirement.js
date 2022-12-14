const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class ModuleRequirement extends Model {}

  ModuleRequirement.init(
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.literal("uuid_generate_v4()"),
      },
    },
    {
      sequelize,
      modelName: "ModuleRequirement",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return ModuleRequirement;
};
