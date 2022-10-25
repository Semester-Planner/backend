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
      'SELECT id FROM "UserModule"'
    );

    const elements = () => {
      return usermods[0].map((elem) => {
        return {
          userModuleId: elem.id,
          name: randString(15),
          description: randString(50),
          date: randomDate(new Date(2022, 0, 1), new Date(2022, 12, 15)),
          notes: randString(25),
        };
      });
    };
    await queryInterface.bulkInsert("Entry", elements());
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Entry", null, {});
  },
};
