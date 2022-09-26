const express = require('express');

const authRouter = require('./routes/auth');

const app = express();
require('dotenv').config();
app.use(express.json());
app.use(
	'/',
	express.static(__dirname + '/public')
); /* al entrar desde un navegador */
app.use('/auth', authRouter);

app.listen(process.env.PORT, () =>
	console.log(`listening at ${process.env.PORT}`)
);
