module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ModuleRequirement", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
        primaryKey: true,
        allowNull: false,
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
      requirementId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "Requirement",
          },
          key: "id",
        },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });

    await queryInterface.addConstraint("ModuleRequirement", {
      fields: ["moduleId", "requirementId"],
      type: "unique",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ModuleRequirement");
  },
};
