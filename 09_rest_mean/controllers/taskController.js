const taskModel = require('../models/task');
const createTask = async (req, res) => {
	const { name, description } = req.body;
	const id = req.uid;

	const newTask = new taskModel({ name, creator: id, description });

	try {
		const task = await newTask.save();
		res.status(200).json({ msg: 'created task', ok: true, task });
	} catch (error) {
		res.status(501).json({ msg: 'internal error' });
	}
};
const getTasks = async (req, res) => {
	const id = req.uid;

	try {
		const tasks = await taskModel
			.find({ creator: id })
			.sort({ createdAt: -1 });
		return res.status(200).json({ msg: 'tasks', ok: true, tasks });
	} catch (error) {
		return res.status(404).json({ msg: 'not found' });
	}
};
const updateTask = async (req, res) => {
	const { id } = req.params;
	const { name, description } = req.body;
	try {
		const task = await taskModel.findByIdAndUpdate(
			id,
			{ name, description },
			{ new: true }
		);
		res.status(200).json({ msg: 'updated task', ok: true, task });
	} catch (error) {
		return res.status(404).json({ msg: 'not found', ok: false });
	}
};
const deleteTask = async (req, res) => {
	const { id } = req.params;
	try {
		const task = await taskModel.findByIdAndDelete(id);
		return res.status(200).json({ msg: 'deleted task', ok: true });
	} catch (error) {
		return res.status(404).json({ msg: 'not found', ok: false });
	}
};
module.exports = { createTask, getTasks, updateTask, deleteTask };
