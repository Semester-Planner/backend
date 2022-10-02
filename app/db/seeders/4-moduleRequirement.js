module.exports = {
  up: async (queryInterface) => {
    const composition = await queryInterface.sequelize.query(
      'SELECT id FROM "Module" WHERE "name"=\'Composition\''
    );
    const modsreq = await queryInterface.sequelize.query(
      'SELECT id FROM "Requirement"'
    );

    const elements = () => {
      return modsreq[0].map((elem) => {
        return {
          moduleId: composition[0][0].id,
          requirementId: elem.id,
        };
      });
    };
    await queryInterface.bulkInsert("ModuleRequirement", elements());
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("ModuleRequirement", null, {});
  },
};
