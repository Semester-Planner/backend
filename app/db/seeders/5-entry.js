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
    const data = (
      await queryInterface.sequelize.query(
        `SELECT 
        "UserModule"."id" AS "umId",
        "Module"."name" AS "modName",
        "Requirement"."name" AS "reqName",
        "Requirement"."description" AS "reqDescription",
        "Requirement"."date" AS "reqDate"
        FROM "UserModule" 
        JOIN "ModuleRequirement" 
        ON "UserModule"."moduleId"="ModuleRequirement"."moduleId"
        JOIN "Requirement"
        ON "ModuleRequirement"."requirementId"="Requirement"."id"
        JOIN "Module"
        ON "UserModule"."moduleId"="Module"."id";`
      )
    )[0];

    const entries = [];

    data.forEach((elem) => {
      entries.push({
        userModuleId: elem.umId,
        name: `${elem.modName}: ${elem.reqName}`,
        description: elem.reqDescription,
        date: elem.reqDate,
        notes: null,
      });
    });

    await queryInterface.bulkInsert("Entry", entries);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Entry", null, {});
  },
};
