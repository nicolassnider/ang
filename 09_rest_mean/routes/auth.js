const { Router } = require('express');
const { check } = require('express-validator');
const { loginUser, registerUser } = require('../controllers/authController');
const validationErrors = require('../middlewares/validationErrors');
const authRouter = Router();

authRouter.post(
	'/login',
	[
		check('eMail', 'invalid email').isEmail(),
		check('password', 'invalid password').isLength({ min: 6 }),		
		validationErrors
	],
	loginUser
);
authRouter.post(
	'/register',
	[
		check('eMail', 'invalid email').isEmail(),
		check('password', 'invalid password').isLength({ min: 6,max:15 }),
		check('userName', 'invalid username').isLength({ min: 6,max:15 }),
		validationErrors
	],
	registerUser
);

module.exports = authRouter;
