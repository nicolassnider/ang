const {Router} = require('express');
const { loginUser, registerUser } = require('../controllers/authController');
const authRouter=Router();

authRouter.post('/login',loginUser);
authRouter.post('/register',registerUser);

module.exports=authRouter;