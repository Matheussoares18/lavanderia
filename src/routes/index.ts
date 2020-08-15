import express from 'express';
import { url } from 'inspector';

const router = express.Router();
router.get('/', (req, res) => {
	res.send({ response: 'I am alive' }).status(200);
});

router.post('/boleto', (req, res) => {
	const result = req.body;

	console.log(result);

	res.send({ response: 'ok' }).status(200);
});

export default router;
