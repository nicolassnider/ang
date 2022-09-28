const { Router } = require('express');
const { check } = require('express-validator');
const {
	createTask,
	getTasks,
	updateTask,
	deleteTask,
} = require('../controllers/taskController');
const validationErrors = require('../middlewares/validationErrors');
const verifyToken = require('../middlewares/verifyToken');
const taskRouter = Router();

taskRouter.post(
	'/',
	[
		check('name', 'invalid name').not().isEmpty(),
		validationErrors,
		verifyToken,
	],
	createTask
);
taskRouter.get('/', [verifyToken], getTasks);
taskRouter.put(
	'/:id',
	[
		check('name', 'invalid name').not().isEmpty(),
		validationErrors,
		verifyToken,
	],
	updateTask
);
taskRouter.delete('/:id', [verifyToken], deleteTask);

module.exports = taskRouter;
