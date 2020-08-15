import { InputType, Field } from 'type-graphql';

@InputType()
export class UserAccountInput {
	@Field({ nullable: false })
	email: string;

	@Field({ nullable: false })
	senha: string;

	@Field({ nullable: false })
	name: string;

	@Field({ nullable: false })
	street: string;

	@Field({ nullable: false })
	number: string;

	@Field({ nullable: false })
	cep: string;

	@Field({ nullable: false })
	state: string;

	@Field({ nullable: false })
	city: string;
}
