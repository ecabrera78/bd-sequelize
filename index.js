const express = require('express');
const db = require('./models');
const routerManager = require('./routes/routerManager');

const app = express();

routerManager(app);

db.sequelize.authenticate().then(result => {
	console.log('Database connected');
	app.listen(8090, () => {
		console.log('Server started. Listening on port 8090');
	});
});
