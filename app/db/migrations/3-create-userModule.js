module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserModule", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "User",
          },
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      moduleId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "Module",
          },
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });

    await queryInterface.addConstraint("UserModule", {
      fields: ["userId", "moduleId"],
      type: "unique",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserModule");
  },
};
