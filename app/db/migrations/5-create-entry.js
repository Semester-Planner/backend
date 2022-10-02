module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Entry", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
        primaryKey: true,
        allowNull: false,
      },
      userModuleId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "UserModule",
          },
          key: "id",
        },
        allowNull: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Entry");
  },
};
