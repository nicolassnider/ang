const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async ()=>{

	try {
		await mongoose.connect(
			process.env.DB_CONNECTION_STRING,
		);
		console.log('connected to db');
	} catch (error) {
		console.log('error connecting to db:',error);
	}
	
}

module.exports = connectDB;
