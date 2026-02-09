import { ConhecimentosCard } from "@/components/ConhecimentosCard";
import Image from "next/image";
import BackgroundParticles from "@/components/BackgroundParticles";
import TagAbertura from "@/components/TagAbertura";
import TagFechamento from "@/components/tagFechamento";
export default function Conhecimentos() {
	return (
		<section className="h-[100vh] overflow-hidden flex flex-col items-center justify-center px-6">
			<BackgroundParticles />
			<div className="flex items-center gap-3 mb-12">
				<TagAbertura />
				<h1 className="md:text-4xl text-3xl font-semibold text-[#F5D5E0] ">
					Tecnologias
				</h1>
				<TagFechamento />
			</div>
			<div
				className="
          grid gap-8
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:flex
        "
			>
				<ConhecimentosCard nome="HTML" icone="/html5.svg" />
				<ConhecimentosCard nome="CSS" icone="/css_old.svg" />
				<ConhecimentosCard nome="JavaScript" icone="/javascript.svg" />
				<ConhecimentosCard nome="TypeScript" icone="/typescript.svg" />
				<ConhecimentosCard nome="React" icone="/react_light.svg" />
				<ConhecimentosCard nome="NodeJS" icone="/nodejs.svg" />
				<ConhecimentosCard nome="NestJS" icone="/nestjs.svg" />
				<ConhecimentosCard nome="NextJS" icone="/nextjs_logo_light.svg" />
			</div>
		</section>
	);
}
