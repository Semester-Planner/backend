module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Requirement", [
      {
        name: "Oral Exam",
        description:
          "Final publication of oral exam appointments are between 18 November and 2 December.",
        date: "2022-10-01 00:00:00",
      },
      {
        name: "Optional Oral Exam",
        description:
          "Final publication of oral exam appointments are between 18 November and 2 December.",
        date: "2022-10-01 00:00:00",
      },
      {
        name: "Deadline: Hand-ins / Self-Assessment (PM, SE, IS)",
        description: "Enter details here, example: 2000 word Essay..",
        date: "2022-11-18 16:59:00",
      },
      {
        name: "Deadline: Hand-in / Self-Assessment (ID)",
        description: "Enter details here, example: 2000 word Essay..",
        date: "2022-11-25 16:59:00",
      },
      {
        name: "Deadline: Hand-in / Self-Assessment (STS)",
        description: "Enter details here, example: 2000 word Essay..",
        date: "2023-01-10 16:59:00",
      },
      {
        name: "Mid-Semester Check-in",
        description: "Don't wait too long to book your check-in!",
        date: "2022-10-01 00:00:00",
      },
      {
        name: "Mid-Semester Hand-in",
        description: "Enter details here, example: 2000 word Essay..",
        date: "2022-10-01 00:00:00",
      },
      {
        name: "Mandatory Check-in",
        description: "Your coordinator is busy, book your check-ins asap!",
        date: "2022-10-01 00:00:00",
      },
      {
        name: "Read a Book",
        description: "Give yourself enough time :)",
        date: "2022-10-01 00:00:00",
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Requirement", null, {});
  },
};
