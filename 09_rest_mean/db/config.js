const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async ()=>{

	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.mjhiupz.mongodb.net/${process.env.MONGO_DB}`
		);
		console.log('connected to db');
	} catch (error) {
		console.log('error connecting to db:',error);
	}
	
}

module.exports = connectDB;
