const bcryptjs = require('bcryptjs');
const userModel = require('../models/user');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
	const { eMail, password } = req.body;
	try {
		const user = await userModel.findOne({ eMail });
		if (!user) {
			return res.status(401).json({
				msg: 'invalid login',
				ok: false,
			});
		}
		const validPassword = bcryptjs.compareSync(password, user.password);
		if (!validPassword) {
			return res.status(401).json({
				msg: 'invalid login',
				ok: false,
			});
		}
		const payload = { id: user.id };
		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: 3600 },
			(error, token) => {
				res.status(201).json({
					msg: 'login ok',
					ok: true,
					userName: user.userName,
					id: user.id,
					token,
				});
			}
		);
	} catch (error) {
		return res.status(501).json({ msg: 'internal error', ok: false });
	}
};
const registerUser = async (req, res) => {
	const { eMail, password, userName } = req.body;
	try {
		let user = await userModel.findOne({ eMail });
		if (user) {
			return res
				.status(501)
				.json({ msg: 'email already used', ok: false });
		}
		const newUser = new userModel({ eMail, password, userName });
		const salt = bcryptjs.genSaltSync(10); /* php std is 12 */
		newUser.password = bcryptjs.hashSync(password, salt);
		await newUser.save();

		const payload = { id: newUser.id };
		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: 3600 },
			(error, token) => {
				res.status(201).json({
					msg: 'user created',
					ok: true,
					userName,
					id: newUser.id,
					token,
				});
			}
		);
	} catch (error) {
		return res.status(501).json({ msg: 'internal error', ok: false });
	}
};

module.exports = { loginUser, registerUser };
