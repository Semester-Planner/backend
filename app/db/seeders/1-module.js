module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Module", [
      {
        name: "Composition",
        mod_code: "ID_01_v2",
        department: "ID",
        coordinator: "Martin Knobel",
      },
      {
        name: "Communication and Presentation",
        mod_code: "PM_01_v2",
        department: "PM",
        coordinator: "Swantje Quoos",
      },
      {
        name: "Software Development Basics",
        mod_code: "SE_01_v2",
        department: "SE",
        coordinator: "Fabio Fracassi",
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Module", null, {});
  },
};
