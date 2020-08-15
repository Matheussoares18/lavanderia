import { InterfaceType, Field, InputType } from 'type-graphql';

export interface Pagarme {
	api_key: string;
}

@InputType()
export class RequestCard {
	@Field()
	cpf: string;

	@Field()
	dateBirth: string;

	@Field()
	phone: string;

	@Field()
	card_number: string;

	@Field()
	card_holder_name: string;

	@Field()
	card_expiration_date: string;

	@Field()
	card_cvv: string;
}

export class ResponseCard {
	object: string;
	id: string;
	date_created: string;
	date_updated: string;
	brand: string;
	holder_name: string;
	first_digits: string;
	last_digits: string;
	country: string;
	fingerprint: string;
	customer: string;
	valid: boolean;
	expiration_date: string;
}
