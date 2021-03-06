import { MiddlewareFn } from 'type-graphql';
import { IContext } from '../interfaces/IContext';
import { verify } from 'jsonwebtoken';

export const isAuthenticated: MiddlewareFn<IContext> = ({ context }, next) => {
	const authorization = context.req.headers['authorization'];

	if (!authorization) {
		throw new Error('not authenticated');
	}
	try {
		const token = authorization.split(' ')[1];
		const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
		context.payload = payload as any;
	} catch (err) {
		throw new Error('not authenticated');
	}
	return next();
};
