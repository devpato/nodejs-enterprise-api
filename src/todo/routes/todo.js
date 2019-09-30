const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
//End points
router.get('/tasks', todoController.getTasks);
router.post('/tasks', todoController.createTask);

module.exports = router;
