const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }

    static findByUsername(username) {
      return User.findOne({
        where: { username },
        rejectOnEmpty: true,
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordHash: DataTypes.STRING,
      // last_login_at: DataTypes.DATE,
      // last_ip_address: DataTypes.STRING,
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
