const jwt = require("jsonwebtoken");

const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		if(!username || !password) {
			throw new Error("Request Must Contain Username and Password")
		}

		const token = jwt.sign(
			{ username },
			process.env.SECRET_KEY,
			{ expiresIn: '30d' }
		)

		res.status(200).json({
			msg: "logged in",
			token
		});
	} catch(e) {
		res.status(400).send(e.message);
	}
	
}

module.exports = {
	login
}