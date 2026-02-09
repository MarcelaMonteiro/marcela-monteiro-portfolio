"use client";
import Image from "next/image";
import BackgroundParticles from "@/components/BackgroundParticles";
import TagAbertura from "@/components/TagAbertura";
import TagFechamento from "@/components/tagFechamento";

export default function Sobre() {
	return (
		<section className=" overflow-hidden flex items-center justify-center relative h-[100vh] bg-[radial-gradient(circle_at_top,#7B337E_0%,#420D4B_35%,#210635_80%)]">
			<BackgroundParticles />
			<div className="flex flex-col md:gap-6  gap-4 p-14 md:p-48">
				<div className="flex items-center justify-items-center gap-2.5">
					<TagAbertura />
					<h1 className="md:text-4xl text-3xl text-[#F5D5E0] font-semibold">
						Sobre mim
					</h1>
					<TagFechamento />
				</div>

				<div className="flex flex-col gap-2">
					<p className="md:text-2xl text-1xl">
						Atualmente sou estudante de análise e desenvolvimento de sistemas no
						Instituto Infnet.
					</p>
					<p className="md:text-2xl text-1xl">
						{" "}
						Amo tecnologia, resolver problemas e aprendizado na prática!
					</p>
					<p className="md:text-2xl text-1xl">
						{" "}
						Venho me dedicando muito estudando por cursos além da faculdade e
						projetos práticos.
					</p>
					<p className="md:text-2xl text-1xl">
						A tecnologia está cada vez mais presente em nossas vidas, e acredito
						que ela deva ser usada para nos ajudar a construir um mundo melhor.
						Facilitando nosso cotidiano, nos disponibilizando informações e
						também no entreterimento!
					</p>
				</div>
			</div>
		</section>
	);
}
