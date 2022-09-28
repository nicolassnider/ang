const { validationResult } = require("express-validator");

const validationErrors = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.mapped(), ok: false });
	}
	next();
};
module.exports = validationErrors;
