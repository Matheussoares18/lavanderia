const nodemailer = require('nodemailer');

export async function sendMail(text: string) {
	let testAccount = await nodemailer.createTestAccount();

	let transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: 'soaresdev18@gmail.com', // generated ethereal user
			pass: 'Matheusss@132', // generated ethereal password
		},
	});

	let mail = await transporter.sendMail({
		from: '"Sambay" <soaresdev18@gmail.com', // sender address
		to: 'soaresmatheus8886@gmail.com', // list of receivers
		subject: 'Testando', // Subject line
		text: text, // plain text body
		html: `<h1>${text}</h1>`, // html body
	});
}
