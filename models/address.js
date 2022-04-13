'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Address extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Address.belongsTo(models.Users, { foreignKey: 'userId' });
		}
	}
	Address.init(
		{
			userId: DataTypes.INTEGER,
			address: DataTypes.STRING,
			postCode: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Address',
		}
	);
	return Address;
};
