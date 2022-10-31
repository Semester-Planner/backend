module.exports = {
  up: async (queryInterface) => {
    const STSmodules = await queryInterface.sequelize.query(
      'SELECT id FROM "Module" WHERE "department"=\'STS\''
    );
    const modsreq = await queryInterface.sequelize.query(
      'SELECT id FROM "Requirement"'
    );

    // const elements = () => {
    //   return modsreq[0].map((elem) => {
    //     return {
    //       moduleId: STSmodules[0][0].id,
    //       requirementId: elem.id,
    //     };
    //   });
    // };

    const elements = () => {
      const elem = [];
      STSmodules[0].forEach((mod) => {
        for (var i = 0; i < Math.floor(Math.random() * 14); i++) {
          elem.push({
            moduleId: mod.id,
            requirementId:
              modsreq[0][Math.floor(Math.random() * modsreq.length)].id,
          });
        }
      });
      return elem;
    };
    await queryInterface.bulkInsert("ModuleRequirement", elements());
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("ModuleRequirement", null, {});
  },
};
