const jwt = require('jsonwebtoken');
require('dotenv').config();
const verifyToken = (req, res, next) => {
	const token = req.header('x-auth-token');
	if (!token) {
		return res.status(401).json({ msg: 'internal error', ok: false });
	}
	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		req.uid = payload.id;
		next();
	} catch (error) {
		return res.status(401).json({ msg: 'internal error', ok: false });
	}
};
module.exports = verifyToken;
