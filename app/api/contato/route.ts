import nodemailer from "nodemailer";

export async function POST(req: Request) {
	const { name, email, message } = await req.json();

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	await transporter.sendMail({
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_USER,
		replyTo: email,
		subject: `Contato do Portfolio - ${name}`,
		text: `Nome: ${name}
		Email: ${email} 
		Mensagem: ${message}`,
	});

	return Response.json({ ok: true });
}
