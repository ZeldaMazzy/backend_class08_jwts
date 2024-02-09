const getSecretData = async (req, res) => {
	try {
		res.status(200).send("Here is your secret data");
	} catch(e) { 
		res.status(400).send(e.message);
	}
}

module.exports = {
	getSecretData
}