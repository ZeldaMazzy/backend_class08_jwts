// * IMPORTS
const express = require('express'); 
const app = express(); 
require('dotenv').config();

// * CONFIG
const PORT = 5000; 
const SERVER_URL = `http://localhost:${PORT}`;

const start = () => {
	app.listen(PORT, () => {
		console.log(`Server is running at: ${SERVER_URL}`);
	});
}

// * MIDDLEWARE
app.use(express.json());
const authenticationMiddleware = require("./middleware/auth.middleware");

// * ROUTES
app.get('/', (req, res) => {
	res.send('Jobs API');
});

app.use("/api/v1", require("./routes/login.route"));
app.use("/api/v1/jobs", authenticationMiddleware, require("./routes/jobs.route"));

// * LISTEN
start();