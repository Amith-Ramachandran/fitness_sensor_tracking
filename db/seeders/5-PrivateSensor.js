module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      "privatesensors",
      [
        {
          user_id: 5,
          sensor_id: 5
        }
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete("privatesensors", null, {})
};
