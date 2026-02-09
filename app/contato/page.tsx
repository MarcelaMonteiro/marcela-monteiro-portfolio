"use client";
import Image from "next/image";
import BackgroundParticles from "./../../components/BackgroundParticles";
import ContatoFormulario from "@/components/ContatoFormulario";
import TagAbertura from "@/components/TagAbertura";
import TagFechamento from "@/components/tagFechamento";
export default function Contato() {
	return (
		<section className=" flex items-center justify-center h-[100vh] bg-[radial-gradient(circle_at_top,#7B337E_0%,#420D4B_35%,#210635_80%)] overflow-hidden ">
			<BackgroundParticles />
			<div className="flex flex-col gap-10 md:mt-20 justify-center items-center">
				<div className="flex items-center gap-3 ">
					<TagAbertura />
					<h1
						className="font-semibold
    text-[#F5D5E0] md:text-4xl text-3xl "
					>
						Contato
					</h1>
					<TagFechamento />
				</div>

				<ContatoFormulario></ContatoFormulario>
			</div>
		</section>
	);
}
