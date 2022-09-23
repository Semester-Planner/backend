module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Requirement", [
      {
        name: "Oral Exam",
        description:
          "Your appointment will be confirmed by your coordinator no later than 11 November.",
        date: NULL,
      },
      {
        name: "Final Submission",
        description: NULL,
        date: NULL,
      },
      {
        name: "Mid-Semester Check-in",
        description: "Remember to book your check-in before 6 October!",
        date: NULL,
      },
      {
        name: "Mid-Semester Hand-in",
        description: NULL,
        date: NULL,
      },
      {
        name: "Mandatory Check-in",
        description: "Your coordinator is busy, book your check-in asap!",
        date: NULL,
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Requirement", null, {});
  },
};
