module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("User", [
      {
        username: "Massi_Ricci",
        email: "massi.ricci@bread.com",
        passwordHash: "weakasspassword",
      },
      {
        username: "Donna_Magi",
        email: "donna.magi@bread.com",
        passwordHash: "weakasspassword",
      },
      {
        username: "Alsje_Lourens",
        email: "alsje.lourens@warhol.com",
        passwordHash: "weakasspassword",
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("User", null, {});
  },
};
