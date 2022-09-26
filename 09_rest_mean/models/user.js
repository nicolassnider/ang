const { Schema, model } = require('mongoose');
const user = new Schema({
	userName: { unique: true, type: String,required:true },
	eMail: { unique: true, type: String,required:true },
	password: {type:String,required:true},
});

module.exports=model('user',user);
