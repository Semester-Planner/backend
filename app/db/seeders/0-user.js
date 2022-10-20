module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("User", [
      {
        email: "massimiliano.ricci@code.berlin",
        passwordHash: "weakasspassword",
        name: "Massi",
        surname: "Ricci",
      },
      {
        email: "donna.magi@code.berlin",
        passwordHash: "weakasspassword",
        name: "Donna",
        surname: "Magi",
      },
      {
        email: "alsje.lourens@code.berlin",
        passwordHash: "weakasspassword",
        name: "Alsje",
        surname: "Lourens",
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("User", null, {});
  },
};
