import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import { buildSchema } from 'type-graphql';
import path, { join } from 'path';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import sequelize from './database/sequelize';
import { graphqlUploadExpress } from 'graphql-upload';
import index from './routes/index';
import http from 'http';
import SocketIO from 'socket.io';
const homedir = require('os').homedir();

const PORT = process.env.PORT || 5000;

export async function generateSchema(): Promise<any> {
	try {
		const schema = await buildSchema({
			resolvers: [
				path.resolve(__dirname, 'resolvers', '**', '*.{ts,js}'),
			],
			emitSchemaFile: true,
		});

		return schema;
	} catch (e) {
		console.error(e);
		throw e;
	}
}

async function main() {
	const app = express();
	app.use(
		cors({
			credentials: true,
			origin: ['http://localhost:3000'],
		})
	);
	app.use(cookieParser());
	// app.use(AuthRouter);
	app.use('/static', express.static(homedir + '/sambay-images'));
	// console.log(homedir);
	const server = new ApolloServer({
		schema: await generateSchema(),
		context: ({ req, res }) => ({ req, res }),
		uploads: false,
	});

	app.use(
		graphqlUploadExpress({
			maxFileSize: 100000000000000000000000000000000000000000000000000,
			maxFiles: 10,
		})
	);

	app.use(bodyParser.urlencoded({ extended: true }));
	const expressServer = http.createServer(app);
	server.applyMiddleware({ app, cors: false });

	app.use(index);

	let io = (module.exports.io = SocketIO(expressServer));

	/* io.on('connection', (socket) => {
		console.log('New client connected');
		SocketManager(socket, io);
		socket.on('disconnect', () => {
			console.log('Client disconnected');
		});
	}); */

	expressServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

sequelize.authenticate().then(async () => {
	await sequelize.sync({ force: false });
	main();
});
