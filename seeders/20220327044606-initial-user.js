'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					userName: 'Lorenzo',
					lastName: 'Lara',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userName: 'Alberto',
					lastName: 'Morales',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {});
	},
};
