"use client";
import { ExternalLink, Github, Link } from "lucide-react";
import Image from "next/image";

type ProjetosCardProps = {
	titulo: string;
	descricao: string;
	imagem: string;
	tecnologias: string[];
	className?: string;
	github?: string;
	link?: string;
};
export default function ProjetosCard({
	titulo,
	descricao,
	imagem,
	tecnologias = [],
	className,
	github,
	link,
}: ProjetosCardProps) {
	return (
		<div
			className={
				`
        group
        rounded-3xl
		
        p-6
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(0,0,0,0.25)]
        hover:shadow-[0_0_35px_rgba(245,213,224,0.25)]
        hover:-translate-y-1
        transition-all
        duration-300
       ` + (className ?? "")
			}
		>
			{/* Title */}
			<h3 className="text-2xl font-semibold text-[#F5D5E0]">{titulo}</h3>

			{/* Description */}
			<p className="mt-3 text-white/80 leading-relaxed">{descricao}</p>

			<Image
				src={imagem}
				alt={titulo}
				width={200}
				height={200}
				className="rounded-2xl object-cover mt-3"
			></Image>

			<div className="flex flex-wrap gap-2 mt-4">
				{tecnologias.map((tecnologia) => (
					<span
						key={tecnologia}
						className="
              px-3 py-1
              text-sm
              rounded-full
              bg-white/10
              border border-white/10
              text-white/70
            "
					>
						{tecnologia}
					</span>
				))}
			</div>

			<div className="flex gap-4 mt-6">
				{github && (
					<a
						href={github}
						target="_blank"
						className="
              flex items-center gap-2
              text-white/70
              hover:text-[#FF4ECD]
              transition
            "
					>
						<Github size={18} />
						GitHub
					</a>
				)}

				{link && (
					<a
						href={link}
						target="_blank"
						className="
              flex items-center gap-2
              text-white/70
              hover:text-[#FF4ECD]
              transition
            "
					>
						<Link size={18} />
						Link do site
					</a>
				)}
			</div>
		</div>
	);
}
