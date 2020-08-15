import { Arg, Query, Resolver, Mutation } from 'type-graphql';
import { where } from 'sequelize/types';
import UserAccount from '../database/models/UserAccount/UserAccount';
import { UserAccountInput } from '../inputs/AccountInput';
import { hash } from 'bcrypt';
import AccountAddress from '../database/models/UserAccount/AccountAddress';

const homedir = require('os').homedir();

@Resolver((of) => UserAccount)
export default class UserAccountResolver {
	@Mutation((returns) => UserAccount)
	async createUserAccount(
		@Arg('userAccountInput', () => UserAccountInput)
		userAccountInput: UserAccountInput
	) {
		const createUserAddress = await AccountAddress.create({
			street: userAccountInput.street,
			number: userAccountInput.number,
			cep: userAccountInput.cep,
			state: userAccountInput.state,
			city: userAccountInput.city,
		});
		const createUser = await UserAccount.create({
			email: userAccountInput.email,
			senha: await hash(userAccountInput.senha, 12),
			name: userAccountInput.name,
			AccountAddressId: createUserAddress.id,
		});

		return createUser;
	}
	@Query((returns) => [UserAccount])
	async getAllUserAccount() {
		return await UserAccount.findAll({
			include: [AccountAddress],
		});
	}
}
