const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserModule extends Model {
    static associate(models) {
      // define association here
    }
  }

  UserModule.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        // !!! Temporary fix for Alsje !!!
        //type: Sequelize.UUID,
        //defaultValue: Sequelize.literal("uuid_generate_v4()"),
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
