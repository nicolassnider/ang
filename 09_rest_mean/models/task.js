const { Schema, model } = require('mongoose');

const task = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	creator: {
		type: Schema.Types.ObjectId,
		ref:'User',
		required: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	description: {},
});

module.exports = model('task', task);
