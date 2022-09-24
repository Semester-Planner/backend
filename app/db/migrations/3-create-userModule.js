module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserModule", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
        primaryKey: true,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserModule");
  },
};
