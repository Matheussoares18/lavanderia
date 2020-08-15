import { Sequelize } from 'sequelize-typescript';
import IDatabaseConfig from '../interfaces/IDatabaseConfig';
import models from './models';
import path from 'path';
let env: any = process.env;

const database: IDatabaseConfig = {
	name: env['DATABASE_NAME'],
	user: env['DATABASE_USER'],
	password: env['DATABASE_PASSWORD'],
	host: env['DATABASE_HOST'],
};

const sequelize = new Sequelize({
	database: database.name,
	username: database.user,
	password: database.password,
	host: database.host,
	dialect: 'postgres',
	models,
	// models: [path.resolve(__dirname, 'models')],
	logging: false,
	// models: [__dirname + 'src/database/models/**/*.ts'],
	// modelMatch: (filename, member) => {
	// 	return !filename.includes('test');
	// },
	// validateOnly: true
});

export default sequelize;
