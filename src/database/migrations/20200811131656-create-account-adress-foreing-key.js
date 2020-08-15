'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		try {
			await queryInterface.addColumn('AccountAdresses', 'userAccountId', {
				type: Sequelize.INTEGER,
			});

			await queryInterface.addConstraint(
				'AccountAdresses',
				['userAccountId'],
				{
					type: 'foreign key',
					name: 'userAccountId',
					references: {
						table: 'UserAccounts',
						field: 'id',
					},
					onDelete: 'cascade',
					onUpdate: 'no action',
				}
			);
			Promise.resolve();
		} catch (err) {
			Promise.reject(err);
		}
	},

	down: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.removeConstraint('AccountAdresses', 'userAccountId'),
			queryInterface.removeColumn('AccountAdresses', 'userAccountId'),
		]);
	},
};
