"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todos",
      [
        { 
          title: "New News",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",   
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("todos", null, {});
    };
  },
};
