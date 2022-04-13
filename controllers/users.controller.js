const db = require('../models');
const Users = db.Users;

const getUsers = async () => {
	const users = await Users.findAll();
	return users;
};

const getUsersByNameWhere = async name => {
	try {
		const results = await db.sequelize.query(
			`Select * from Users where userName like '%${name}%'`
		);

		if (results[0].length === 0) {
			throw new Error('No result');
		}

		return results[0];
	} catch (e) {
		throw e;
	}
};

const getUsersByLastName = async lastName => {
	const result = await Users.findAll({
		attributes: ['userName', 'lastName'],
		where: { lastName: lastName },
	});

	return result;
};

module.exports = {
	getUsers,
	getUsersByNameWhere,
	getUsersByLastName,
};
