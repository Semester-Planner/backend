const { use } = require("chai");

// populate with random string
function randString(length) {
  var result = "";
  var letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz          ";
  var stringLength = letters.length;
  for (var i = 0; i < length; i++) {
    result += letters.charAt(Math.floor(Math.random() * stringLength));
  }
  return result;
}

// populate with random date
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// create entry for each UserModule
module.exports = {
  up: async (queryInterface) => {
    const usermods = await queryInterface.sequelize.query(
      'SELECT * FROM "UserModule"'
    );

    const sermods = await usermods[0];
    console.log(sermods);

    const a = [];

    // returns

    // WE NEED MODULE NAME, REQUIRMENT NAME + DESCRIPTION to be returned for each USERMODULE FOR ENTRY
    const myFunction = async () => {
      for (const mod of sermods) {
        const reqs = await queryInterface.sequelize.query(
          `SELECT id FROM "ModuleRequirement" WHERE "ModuleRequirement"."moduleId"='${mod.moduleId}';`
        );
        console.log(reqs[0]);
        a.push(reqs);
      }
      console.log(a);
      // const entries = await queryInterface.sequelize.query(
      //   'SELECT '
      // );
      // console.log(sermods.length);
      // return reqIds;
    };

    await myFunction();

    //console.log(reqId[0]);

    // const elements = () => {
    //   return usermods[0].map((elem) => {
    //     return {
    //       //requirementId: reqId[0],
    //       name: randString(15),
    //       description: randString(50),
    //       date: randomDate(new Date(2022, 0, 1), new Date(2022, 12, 15)),
    //       notes: randString(25),
    //     };
    //   });
    // };
    // await queryInterface.bulkInsert("Entry", elements());
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Entry", null, {});
  },
};
