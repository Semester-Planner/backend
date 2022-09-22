const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }

    static findByEmail(email) {
      return User.findOne({
        where: { email },
        rejectOnEmpty: true,
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        // !!! Temporary fix for Alsje !!!
        //type: Sequelize.UUID,
        //defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return User;
};
