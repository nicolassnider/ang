const { Router } = require('express');
const { check } = require('express-validator');
const { loginUser, registerUser } = require('../controllers/authController');
const validationErrors = require('../middlewares/validationErrors');
const authRouter = Router();
/**
 * @swagger
 * components:
 * 	schemas:
 * 		User:
 * 			type: object
 * 			properties:
 * 				userName:
 * 					type: string
 * 					description: The user's name
 * 				eMail:
 * 					type: string
 * 					description: The user's email
 * 				password:
 * 					type: string
 * 					description: The user's password
 * 			required:
 * 				- userName
 * 				- eMail
 * 				- password
 * 			example:
 * 				userName: John Doe
 * 				eMail: example@mail.com
 * 				password: 123456789
 */
authRouter.post(
	'/login',
	[
		check('eMail', 'invalid email').isEmail(),
		check('password', 'invalid password').isLength({ min: 6 }),
		validationErrors,
	],
	loginUser
);
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
