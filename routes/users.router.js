const express = require('express');
const {
	getUsers,
	getUsersByNameWhere,
	getUsersByLastName,
} = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter.get('/', async (req, res) => {
	const listAll = await getUsers();
	res.json({ users: listAll });
});

usersRouter.get('/:name', async (req, res) => {
	try {
		const { name } = req.params;
		const listUsers = await getUsersByNameWhere(name);

		res.json({ users: listUsers });
	} catch (e) {
		console.log(e.message);
		res.status(404).json({ message: e.message });
	}
});

/*usersRouter.get('/:lastName', async (req, res) => {
	const { lastName } = req.params;
	const listUsers = await getUsersByLastName(lastName);

	return res.json({ users: listUsers });
});*/

module.exports = usersRouter;
