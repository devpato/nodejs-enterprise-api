const todoService = require('../services/todo');

module.exports = {
  getTasks: async (req, res, next) => {
    try {
      const tasks = await todoService.getTasks();
      return res.status(201).json({
        message: 'Fetched posts successfully.',
        tasks: tasks,
        status: 200
      });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return err;
    }
  },

  createTask: async (req, res, next) => {
    try {
      const task = todoService.createTask(req.body.title, req.body.status);
      await task.save();
      return res.status(201).json({
        message: 'Fetched posts successfully.',
        status: 200
      });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return err;
    }
  }
};
