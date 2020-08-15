import dotenv from 'dotenv';
dotenv.config();
import { ResponseCard } from '../interfaces/Pagarme';
import {
	cardRegister,
	buy,
	createBankAccount,
	createRecipient,
} from '../modules/pagarme';
import { zip } from 'lodash';
import { request } from 'http';

describe('Pagarme', () => {
	let testCard: ResponseCard;
	/* 	it('should create a card', async (done) => {
		const card = await cardRegister({
			card_number: '5243892987369382',
			card_cvv: '721',
			card_expiration_date: '1221',
			card_holder_name: 'Kleber Santana',
			dateBirth: '1965-01-01',
			cpf: '123456789',
			phone: '+5541995331881',
		});
		testCard = card.data;
		expect(card.status).toBe(200);
		console.log(card.data.id);

		done();
	}); */

	it('should buy', async (done) => {
		try {
			const resultBuy = await buy({
				amount: 2000,

				billing: {
					address: {
						city: 'curitiba',
						country: 'br',
						state: 'pr',
						street: 'Rua abc',
						street_number: '4002',
						zipcode: '12345678',
					},
					name: 'Roger',
				},
				payment_method: 'boleto',

				postback_url: 'http://912cf0d3c735.ngrok.io/boleto',

				card_id: 'card_ckd5w74sa0391yk6faraarmgs',
				customer: {
					external_id: '#3311',
					name: 'Morpheus Fishburne',
					type: 'individual',
					country: 'br',
					email: 'mopheus@nabucodonozor.com',

					documents: [
						{
							type: 'cpf',
							number: '30621143049',
						},
					],
					phone_numbers: ['+5511999998888', '+5511888889999'],
					birthday: '1965-01-01',
				},
				installments: '2',
				items: [
					{
						id: '10',
						quantity: 1,
						tangible: false,
						title: 'produto a',
						unit_price: 2000,
					},
				],
				split_rules: [
					{
						recipient_id: 're_ckdeu123k0k2oxs6d27cc9jh3',
						amount: 20,
						liable: true,
						charge_processing_fee: true,
					},
					{
						recipient_id: 're_ckd4eg18s0els8p6ellwi8rgc',
						amount: 80,
						liable: false,
						charge_processing_fee: false,
					},
				],
			});
			expect(resultBuy.status).toBe(200);

			done();
			console.log(resultBuy.data.id);
		} catch (err) {
			console.log(err);
			done();
		}
	});
	/* it('should create a bank account', async (done) => {
		try {
			const result = await createBankAccount({
				bank_code: '341',
				agencia: '8059',
				agencia_dv: null,
				conta: '11716',
				conta_dv: '1',
				type: 'conta_corrente',
				document_number: '38937666936',
				legal_name: 'Levi Emanuel Sérgio da Cunha',
			});

			expect(result.status).toBe(200);

			done();
			console.log(result.data.id);
		} catch (err) {
			console.log(err);
			done();
		}
	}); */

	/* it('should create a bank account', async (done) => {
		try {
			const result = await createRecipient({
				transfer_interval: 'daily',
				transfer_day: null,
				transfer_enabled: 'true',
				bank_account_id: '18340534',
				postback_url: null,
				anticipatable_volume_percentage: '0',
				automatic_anticipation_enabled: 'true',
				register_information: {
					type: 'individual',
					document_number: '38937666936',
					name: 'Levi Emanuel Sérgio da Cunha',

					email: 'leviemanuelsergiodacunha_@morada.com.br',
					phone_numbers: [
						{
							ddd: '42',
							number: '981308490',
							type: 'mobile',
						},
					],
				},
			});
			expect(result.status).toBe(200);

			done();
			console.log(result.data.id);
		} catch (err) {
			console.log(err);
			done();
		}
	}); */
});
