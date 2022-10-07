const { Router } = require('express');
const { check } = require('express-validator');
const {
	createTask,
	getTasks,
	updateTask,
	deleteTask,
	getTask,
} = require('../controllers/taskController');
const validationErrors = require('../middlewares/validationErrors');
const verifyToken = require('../middlewares/verifyToken');
const taskRouter = Router();

/**
 * @swagger
 * components:
 *      schemas:
 *          Task:
 *              type: object
 *              required:
 *                  - name
 *                  - creator
 *                  - description
 *              properties:
 *                  name:
 *                      type: string
 *                      description: The task's name
 *                  creator:
 *                      type: string
 *                      description: The user's id
 *                  createdAt:
 *                      type: date
 *                      description: Time created
 *                  description:
 *                      type: string
 *                      description: Task´s description
 *              example:
 *                  name: task365
 *                  creator: 633258f2e05be2e3d98d68de
 *                  createdAt: 2022-09-27T23:28:00.601Z
 *                  desctription: new taks
 */

 /**
 * @swagger
 * /task:
 *  post:
 *      summary: Create task
 *      tags: [Task]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Task'
 *      responses:
 *          501:
 *              description: Server error
 *          201:
 *              description: User created
 */
taskRouter.post(
	'/',
	[
		check('name', 'invalid name').not().isEmpty(),
		validationErrors,
		verifyToken,
	],
	createTask
);
/**
 * @swagger
 * /task:
 *  get:
 *      summary: Get tasks list
 *      tags: [Task]
 *      parameters:
 *          - name: x-auth-token
 *            in: header
 *            description: JWT Token validation
 *            required: true
 *            type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          uid:
 *                              type: User
 *                              description: User id
 *      responses:
 *          501:
 *              description: Server error
 *          201:
 *              description: User created
 */
taskRouter.get('/', [verifyToken], getTasks);

/**
 * @swagger
 * /task/{id}:
 *  get:
 *      summary: Get task by id
 *      tags: [Task]
 *      parameters:
 *          - name: x-auth-token
 *            in: header
 *            description: JWT Token validation
 *            required: true
 *            type: string
 *          - name: id
 *            in: path
 *            description: task id
 *            required: true
 *            type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          uid:
 *                              type: User
 *                              description: User id
 *      responses:
 *          501:
 *              description: Server error
 *          201:
 *              description: User created
 */
taskRouter.get('/:id', [verifyToken], getTask);

/**
 * @swagger
 * /task/{id}:
 *  put:
 *      summary: modify task
 *      tags: [Task]
 *      parameters:
 *          - name: x-auth-token
 *            in: header
 *            description: JWT Token validation
 *            required: true
 *            type: string
 *          - name: id
 *            in: path
 *            description: task id
 *            required: true
 *            type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: task new name
 *                          description:
 *                              type: string
 *                              description: task new description
 *      responses:
 *          501:
 *              description: Server error
 *          201:
 *              description: User created
 */
taskRouter.put(
	'/:id',
	[
		check('name', 'invalid name').not().isEmpty(),
		validationErrors,
		verifyToken,
	],
	updateTask
);

/**
 * @swagger
 * /task/{id}:
 *  delete:
 *      summary: delete task by id
 *      tags: [Task]
 *      parameters:
 *          - name: x-auth-token
 *            in: header
 *            description: JWT Token validation
 *            required: true
 *            type: string
 *          - name: id
 *            in: path
 *            description: task id
 *            required: true
 *            type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          uid:
 *                              type: User
 *                              description: User id
 *      responses:
 *          501:
 *              description: Server error
 *          201:
 *              description: User created
 */
taskRouter.delete('/:id', [verifyToken], deleteTask);

module.exports = taskRouter;
