'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Addresses',
			[
				{
					userId: 1,
					address: 'My address',
					postCode: 32234,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 1,
					address: 'My second address',
					postCode: 33234,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Addresses', null, {});
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 *
		 */
	},
};
