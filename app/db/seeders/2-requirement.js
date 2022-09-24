module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Requirement", [
      {
        name: "Oral Exam",
        description:
          "Your appointment will be confirmed by your coordinator no later than 11 November.",
        date: "2022-01-01 00:00:00",
      },
      {
        name: "Final Submission",
        description: "",
        date: "2022-01-01 00:00:00",
      },
      {
        name: "Mid-Semester Check-in",
        description: "Remember to book your check-in before 6 October!",
        date: "2022-01-01 00:00:00",
      },
      {
        name: "Mid-Semester Hand-in",
        description: "",
        date: "2022-01-01 00:00:00",
      },
      {
        name: "Mandatory Check-in",
        description: "Your coordinator is busy, book your check-in asap!",
        date: "2022-01-01 00:00:00",
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Requirement", null, {});
  },
};
