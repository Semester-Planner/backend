module.exports = {
  up: async (queryInterface) => {
    const usermods = await queryInterface.sequelize.query(
      'SELECT id FROM "UserModule"'
    );

    const elements = () => {
      return usermods[0].map((elem) => {
        return {
          userModuleId: elem.id,
          name: "test",
          description: "testt",
          date: "2022-01-01 00:00:00",
          notes: "testtt",
        };
      });
    };
    await queryInterface.bulkInsert("Entry", elements());
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Entry", null, {});
  },
};
