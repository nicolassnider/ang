const express = require('express');
const connectDb = require('./db/config');
const cors = require('cors');


const authRouter = require('./routes/auth');
const taskRouter = require('./routes/tasks');

const app = express();
require('dotenv').config();
app.use(express.json());
app.use(cors())
connectDb();

app.use(
	'/',
	express.static(__dirname + '/public')
); /* al entrar desde un navegador */
app.use('/auth', authRouter);
app.use('/task', taskRouter);

app.listen(process.env.PORT, () =>
	console.log(`listening at ${process.env.PORT}`)
);
