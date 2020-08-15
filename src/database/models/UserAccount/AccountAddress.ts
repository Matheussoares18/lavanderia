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
import UserAccount from './UserAccount';

@Table
@ObjectType()
export default class AccountAdress extends Model<AccountAdress> {
	@PrimaryKey
	@AutoIncrement
	@Field()
	@Column
	id: number;

	@Field({ nullable: true })
	@Column
	street: string;

	@Field({ nullable: true })
	@Column
	number: string;

	@Field()
	@Column
	cep: string;

	@Field()
	@Column
	state: string;

	@Field()
	@Column
	city: string;
}
