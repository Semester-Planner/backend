module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("User", [
      {
        email: "massi.ricci@bread.com",
        passwordHash: "weakasspassword",
        name: "Massi",
        surname: "Ricci",
      },
      {
        email: "donna.magi@bread.com",
        passwordHash: "weakasspassword",
        name: "Donna",
        surname: "Magi",
      },
      {
        email: "alsje.lourens@bread.com",
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
