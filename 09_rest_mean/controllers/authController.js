const userModel = require('../models/user');

const loginUser = (req, res) => {
	res.send('auth controller');
};
const registerUser = async (req, res) => {
	const { eMail, password, userName } = req.body;
	try {
		let user = await userModel.findOne({ eMail });
		if(user){
			return res.status(501).json({msg:'email already used',ok:false})
		}
		const newUser = new userModel({ eMail, password, userName });
		await newUser.save();
		res.status(201).json({msg:'user created',ok:true,eMail,userName})
	} catch (error) {
		return res.status(501).json({msg:'internal error',ok:false})
	}
	
	
};

module.exports = { loginUser, registerUser };
