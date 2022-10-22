module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("User", [
      {
        email: "massimiliano.ricci@code.berlin",
        name: "Massi",
        surname: "Ricci",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRQkyJnY45wlcKinGmQoY8Qt7lLGye0-rcWO1CXo&s",
      },
      {
        email: "donna.magi@code.berlin",
        name: "Donna",
        surname: "Magi",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRQkyJnY45wlcKinGmQoY8Qt7lLGye0-rcWO1CXo&s",
      },
      {
        email: "alsje.lourens@code.berlin",
        name: "Alsje",
        surname: "Lourens",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRQkyJnY45wlcKinGmQoY8Qt7lLGye0-rcWO1CXo&s",
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("User", null, {});
  },
};
