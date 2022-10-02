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
        name: "Teamwork and Collaboration",
        mod_code: "IS_01_v2",
        department: "IS",
        coordinator: "Britte Loeckel",
      },
      {
        name: "Leadership",
        mod_code: "IS_02_v2",
        department: "IS",
        coordinator: "Britte Loeckel",
      },
      {
        name: "Creative Problem-Solving",
        mod_code: "IS_03_v2",
        department: "IS",
        coordinator: "Martin Knobel",
      },
      {
        name: "Self-Directed (Curiosity-Driven) Learning",
        mod_code: "IS_04_v2",
        department: "IS",
        coordinator: "Adam Roe",
      },
      {
        name: "Sustainable Development",
        mod_code: "IS_05_v2",
        department: "IS",
        coordinator: "Florian Grote",
      },
      {
        name: "Intercultural Understanding",
        mod_code: "IS_06_v2",
        department: "IS",
        coordinator: "Fabian Geier",
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
      {
        name: "Essentials",
        mod_code: "STS_01_v2",
        department: "STS",
        coordinator: "Fabian Geier",
      },
      {
        name: "Academic Reading",
        mod_code: "STS_02_v2",
        department: "STS",
        coordinator: "Fabian Geier",
      },
      {
        name: "Research",
        mod_code: "STS_03_v2",
        department: "STS",
        coordinator: "Fabian Geier",
      },
      {
        name: "Presentation",
        mod_code: "STS_04_v2",
        department: "STS",
        coordinator: "Fabian Geier",
      },
      {
        name: "Judging Technology",
        mod_code: "STS_05_v2",
        department: "STS",
        coordinator: "Fabian Geier",
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Module", null, {});
  },
};
