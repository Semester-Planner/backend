module.exports = {
  up: async (queryInterface) => {
    const donna = await queryInterface.sequelize.query(
      'SELECT id FROM "User" WHERE "name"=\'Donna\''
    );
    const donnasmod = await queryInterface.sequelize.query(
      'SELECT id FROM "Module"'
    );

    const elements = () => {
      return donnasmod[0].map((elem) => {
        return {
          userId: donna[0][0].id,
          moduleId: elem.id,
        };
      });
    };
    await queryInterface.bulkInsert("UserModule", elements());
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("UserModule", null, {});
  },
};
