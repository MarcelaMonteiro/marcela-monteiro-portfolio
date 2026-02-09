"use client";
import { useState } from "react";
import BackgroundParticles from "./BackgroundParticles";

export default function ContatoFormulario() {
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);

		const formData = new FormData(e.currentTarget);
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		};

		const res = await fetch("/api/contato", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		setLoading(false);
		if (res.ok) alert("mensagem enviada");
		else alert("erro ao enviar");
	}

	return (
		<div
			className=" rounded-3xl
        p-10
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(0,0,0,0.25)]
        hover:shadow-[0_0_35px_rgba(245,213,224,0.25)]
        hover:-translate-y-1
        transition-all
        duration-300 w-full md:w-3xl "
		>
			<BackgroundParticles />
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-6 items-center justify-center"
			>
				{" "}
				<div className="flex flex-col gap-4 items-center justify-center">
					<input
						name="name"
						placeholder="Seu nome"
						required
						className=" border border-[#F5D5E0]/20
    shadow-[0_0_20px_rgba(123,51,126,0.45)]
    hover:shadow-[0_0_28px_rgba(245,213,224,0.35)]
    hover:scale-[1.03] w-full md:w-3xl max-w-md p-3 rounded-lg"
					/>
					<input
						name="email"
						type="email"
						placeholder="Seu e-mail"
						required
						className=" border border-[#F5D5E0]/20
    shadow-[0_0_20px_rgba(123,51,126,0.45)]
    hover:shadow-[0_0_28px_rgba(245,213,224,0.35)]
    hover:scale-[1.03] w-full md:w-3xl max-w-md p-3 rounded-lg"
					/>
					<textarea
						name="message"
						placeholder="Sua mensagem..."
						required
						className=" border border-[#F5D5E0]/20
    shadow-[0_0_20px_rgba(123,51,126,0.45)]
    hover:shadow-[0_0_28px_rgba(245,213,224,0.35)]
    hover:scale-[1.03] w-full md:w-3xl max-w-md p-3 rounded-lg h-32 resize-none"
					></textarea>
				</div>
				<button
					disabled={loading}
					className="w-full max-w-md p-2 rounded-2xl font-semibold
    text-[#F5D5E0]
    bg-[linear-gradient(135deg,#7B337E_0%,#420D4B_100%)]
    border border-[#F5D5E0]/20
    shadow-[0_0_20px_rgba(123,51,126,0.45)]
    hover:shadow-[0_0_28px_rgba(245,213,224,0.35)]
    hover:scale-[1.03]
    transition cursor-pointer whitespace-nowrap"
				>
					{loading ? "Enviando..." : "Enviar"}
				</button>
			</form>
		</div>
	);
}
