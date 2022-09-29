const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class UserModule extends Model {
    static associate(models) {
      this.belongsTo(models.Entry, {
        through: models.Entry,
        foreignKey: "userModuleId",
      });
    }
  }

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
