import {
	Github,
	Phone,
	Mail,
	LinkedinIcon,
	MapPinHouseIcon,
} from "lucide-react";

export default function Footer() {
	return (
		<footer className="w-full bg-[rgba(33,6,53,0.55)] backdrop-blur-xl border-t border-white/10">
			<div className="max-w-5xl mx-auto px-6 py-10">
				<h2 className="text-white font-semibold text-lg mb-6 md:flex md:items-center md:justify-center">
					Contato
				</h2>

				<div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 text-sm">
					<a
						href="https://github.com/MarcelaMonteiro"
						target="_blank"
						className="flex items-center gap-3 text-white/70 hover:text-[#FF4ECD] transition"
					>
						<Github size={18} />
						GitHub
					</a>

					<a
						href="https://wa.me/5521975322165"
						target="_blank"
						className="flex items-center gap-3 text-white/70 hover:text-[#FF4ECD] transition"
					>
						<Phone size={18} />
						WhatsApp
					</a>

					<a
						href="mailto:marcelapmont123@gmail.com"
						className="flex items-center gap-3 text-white/70 hover:text-[#FF4ECD] transition break-all"
					>
						<Mail size={18} />
						marcelapmont123@gmail.com
					</a>

					<a
						href="https://www.linkedin.com/in/marcela-monteiro-475b77216/"
						target="_blank"
						className="flex items-center gap-3 text-white/70 hover:text-[#FF4ECD] transition"
					>
						<LinkedinIcon size={18} />
						LinkedIn
					</a>

					<p className="flex items-center gap-3 text-white/50">
						<MapPinHouseIcon size={18} />
						Rio de Janeiro - RJ
					</p>
				</div>

				<div className="mt-10 border-t border-white/10 pt-4 text-xs text-white/40 text-center">
					© {new Date().getFullYear()} Marcela Monteiro — Portfolio
				</div>
			</div>
		</footer>
	);
}
