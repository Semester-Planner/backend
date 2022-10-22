const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Module, {
        through: models.UserModule,
        foreignKey: "userId",
      });
    }
    static findById(userId) {
      return User.findByPk(userId, {
        rejectOnEmpty: true,
      });
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
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.literal("uuid_generate_v4()"),
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: true,
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
