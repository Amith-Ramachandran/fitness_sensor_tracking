module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      "sensors",
      [
        {
          name: "s1",
          is_allocatable: true,
          is_damaged: false,
          is_private: false
        },
        {
          name: "s2",
          is_allocatable: true,
          is_damaged: false,
          is_private: false
        },
        {
          name: "s3",
          is_allocatable: true,
          is_damaged: true,
          is_private: false
        },
        {
          name: "s4",
          is_allocatable: true,
          is_damaged: false,
          is_private: false
        },
        {
          name: "s5",
          is_allocatable: false,
          is_damaged: false,
          is_private: true
        },
        {
          name: "s7",
          is_allocatable: true,
          is_damaged: false,
          is_private: false
        },
        {
          name: "s6",
          is_allocatable: true,
          is_damaged: false,
          is_private: false
        },
        {
          name: "s9",
          is_allocatable: true,
          is_damaged: false,
          is_private: false
        },
        {
          name: "s8",
          is_allocatable: true,
          is_damaged: false,
          is_private: false
        }
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete("sensors", null, {})
};
