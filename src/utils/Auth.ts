import { sign } from 'jsonwebtoken';
import UserAccount from '../database/models/UserAccount/UserAccount';

export const createAccessToken = (user: UserAccount) => {
	return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
		expiresIn: '15m',
	});
};

export const createRefreshToken = (user: UserAccount) => {
	return sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET!, {
		expiresIn: '7d',
	});
};
