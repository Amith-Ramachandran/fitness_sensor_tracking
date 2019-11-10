module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jane Doe"
        },
        {
          name: "Ammi kunji"
        },
        {
          name: "Lakhmi"
        },
        {
          name: "Shiva"
        },
        {
          name: "Keshu"
        },
        {
          name: "Vishnu"
        },
        {
          name: "Neelu"
        },
        {
          name: "Baalu"
        },
        {
          name: "Paru kutty"
        }
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete("users", null, {})
};
