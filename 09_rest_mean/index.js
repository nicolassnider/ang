const express = require('express');
const connectDb = require('./db/config');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const authRouter = require('./routes/auth');
const taskRouter = require('./routes/tasks');
const path = require('path');

const { version } = require('./package.json');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(cors());
connectDb();

app.use(
	'/',
	express.static(__dirname + '/public')
); /* al entrar desde un navegador */
app.use(
	'/docs',
	swaggerUI.serve,
	swaggerUI.setup(
		swaggerJSDoc({
			definition: {
				openapi: '3.0.0',
				info: { title: 'Task API', version: version },
				servers: [
					{
						url: 'http://localhost:3000',
					},
					{
						url: 'https://taskappmean.herokuapp.com/',
					},
				],
			},
			apis: [`${path.join(__dirname, './routes/*.js')}`],
		})
	)
);
app.use('/auth', authRouter);
app.use('/task', taskRouter);

app.listen(process.env.PORT, () =>
	console.log(`listening at ${process.env.PORT}`)
);
