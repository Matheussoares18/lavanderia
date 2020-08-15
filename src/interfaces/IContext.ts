import { Request, Response } from 'express';
export interface IContext {
	req: Request;
	res: Response;
	payload: { userid: number };
}
