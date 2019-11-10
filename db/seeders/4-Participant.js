module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      "participants",
      [
        {
          user_id: 1,
          workout_id: 1,
          sensor_id: 1
        },
        {
          user_id: 2,
          workout_id: 1,
          sensor_id: 2
        },
        {
          user_id: 3,
          workout_id: 2,
          sensor_id: 3
        },
        {
          user_id: 2,
          workout_id: 2,
          sensor_id: 4
        },
        {
          user_id: 3,
          workout_id: 3,
          sensor_id: 6
        },
        {
          user_id: 4,
          workout_id: 4,
          sensor_id: 7
        },
        {
          user_id: 5,
          workout_id: 5,
          sensor_id: 5
        },
        {
          user_id: 6,
          workout_id: 6,
          sensor_id: 8
        },
        {
          user_id: 7,
          workout_id: 7,
          sensor_id: 9
        },
        {
          user_id: 8,
          workout_id: 8,
          sensor_id: 2
        },
        {
          user_id: 9,
          workout_id: 9,
          sensor_id: 3
        }
      ],

      {}
    ),

  down: queryInterface => queryInterface.bulkDelete("participants", null, {})
};
