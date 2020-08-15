import {
	Table,
	Model,
	Column,
	BelongsTo,
	ForeignKey,
	HasMany,
	PrimaryKey,
	AutoIncrement,
	HasOne,
	BelongsToMany,
} from 'sequelize-typescript';
import { ObjectType, Field } from 'type-graphql';
import AccountAdress from './AccountAddress';

@Table
@ObjectType()
export default class UserAccount extends Model<UserAccount> {
	@PrimaryKey
	@AutoIncrement
	@Field()
	@Column
	id: number;

	@Field({ nullable: true })
	@Column
	email: string;

	@Field({ nullable: true })
	@Column
	senha: string;

	@Field()
	@Column
	name: string;

	@Field()
	@ForeignKey(() => AccountAdress)
	@Column
	AccountAddressId: number;

	@BelongsTo(() => AccountAdress)
	@Field(() => AccountAdress, { nullable: true })
	AccountAdress: AccountAdress;
}
