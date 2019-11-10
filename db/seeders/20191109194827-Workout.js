module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      "workouts",
      [
        {
          name: "w1"
        },
        {
          name: "w2"
        },
        {
          name: "w3"
        },
        {
          name: "w4"
        },
        {
          name: "w5"
        },
        {
          name: "w5"
        },
        {
          name: "w6"
        },
        {
          name: "w7"
        },
        {
          name: "w8"
        }
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete("workouts", null, {})
};
