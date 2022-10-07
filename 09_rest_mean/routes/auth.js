const { Router } = require('express');
const { check } = require('express-validator');
const { loginUser, registerUser } = require('../controllers/authController');
const validationErrors = require('../middlewares/validationErrors');
const authRouter = Router();
/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  - userName
 *                  - eMail
 *                  - password
 *              properties:
 *                  userName:
 *                      type: string
 *                      description: The user's name
 *                  eMail:
 *                      type: string
 *                      description: The user's email
 *                  password:
 *                      type: string
 *                      description: The user's password
 *              example:
 *                  userName: johndoe
 *                  eMail: jdoe@mail.com
 *                  password: a123456789
 *          UserLogin:
 *              type: object
 *              required:
 *                  - eMail
 *                  - password
 *              properties:
 *                  eMail:
 *                      type: string
 *                      description: The user's email
 *                  password:
 *                      type: string
 *                      description: The user's password
 *              example:
 *                  email: jdoe@mail.com
 *                  password: 123456789
 */


authRouter.post(
 /**
 * @swagger
 * /auth/login:
 *  post:
 *      summary: Login user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/UserLogin'
 *      responses:
 *          501:
 *              description: Server error
 *          201:
 *              description: User created
 */
	'/login',
	[
		check('eMail', 'invalid email').isEmail(),
		check('password', 'invalid password').isLength({ min: 6 }),
		validationErrors,
	],
	loginUser
);
/**
 * @swagger
 * /auth/register:
 *  post:
 *      summary: Register new user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          501:
 *              description: Server error
 *          200:
 *              description: User created
 */
authRouter.post(
	'/register',
	[
		check('eMail', 'invalid email').isEmail(),
		check('password', 'invalid password').isLength({ min: 6, max: 15 }),
		check('userName', 'invalid username').isLength({ min: 6, max: 15 }),
		validationErrors,
	],
	registerUser
);

module.exports = authRouter;
