const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class UserModule extends Model {}

  UserModule.init(
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.literal("uuid_generate_v4()"),
      },
    },
    {
      sequelize,
      modelName: "UserModule",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return UserModule;
};
