const loginUser = (req, res) => {
	res.send('auth controller');
};
const registerUser = (req, res) => {
	const { eMail, password, userName } = req.body;
	console.log(eMail, password, userName);
	res.json({ ok: true, message: 'user registered' });
};

module.exports = { loginUser, registerUser };
