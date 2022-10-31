module.exports = {
  up: async (queryInterface) => {
    const STSmodules = (
      await queryInterface.sequelize.query(
        'SELECT id FROM "Module" WHERE "department"=\'STS\''
      )
    )[0];
    const modsreq = (
      await queryInterface.sequelize.query('SELECT id FROM "Requirement"')
    )[0];

    const elem = [];
    STSmodules.forEach((mod) => {
      modsreq.forEach((req) => {
        if (Math.random() > 0.6) {
          elem.push({
            moduleId: mod.id,
            requirementId: req.id,
          });
        }
      });
    });

    await queryInterface.bulkInsert("ModuleRequirement", elem);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("ModuleRequirement", null, {});
  },
};
