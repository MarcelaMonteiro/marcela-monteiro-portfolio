"use client";
import Image from "next/image";
import ProjetosCard from "@/components/ProjetosCard";
import TagAbertura from "@/components/TagAbertura";
import TagFechamento from "@/components/tagFechamento";
import BackgroundParticles from "@/components/BackgroundParticles";

export default function Projetos() {
	return (
		<section className="overflow-hidden flex items-center justify-center h-[100vh] bg-[radial-gradient(circle_at_top,#7B337E_0%,#420D4B_35%,#210635_80%)]">
			<BackgroundParticles />

			<div className="flex flex-col  gap-7">
				<div className="flex items-center justify-items-center gap-2.5">
					<TagAbertura />
					<h1 className="font-semibold md:text-4xl text-3xl text-[#F5D5E0] animate-fadeIn">
						Meus projetos
					</h1>
					<TagFechamento />
				</div>
				<ProjetosCard
					titulo="Spa dos focinhos"
					descricao="Site fictício que fiz para aprender NestJS para back-end junto com NextJS para front-end. Feito com banco de dados Postgres."
					imagem="/spadosfocinhossite.png"
					tecnologias={["NestJS", "NextJS", "PostgreSQL", "Prisma"]}
					github="https://github.com/MarcelaMonteiro/spa-dos-focinhos"
					link="https://spa-dos-focinhos.vercel.app/"
					className="w-80 md:w-full"
				></ProjetosCard>
			</div>
		</section>
	);
}
