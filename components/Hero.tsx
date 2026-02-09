import Image from "next/image";
import BackgroundParticles from "@/components/BackgroundParticles";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative h-[100vh] bg-[radial-gradient(circle_at_top,#7B337E_0%,#420D4B_35%,#210635_80%)] flex items-center justify-center text-white md:flex md:items-start md:justify-start p-20 overflow-hidden ">
			<BackgroundParticles />

			<div className="md:flex flex flex-col md:items-start md:justify-start items-center justify-center md:mt-10  ">
				<div className="flex flex-col md:p-40 gap-4 md:w-full w-2xs">
					<div className="md:hidden flex justify-end">
						<Image
							alt="imagem computador"
							src="/fotohero.png"
							width={150}
							height={100}
							className="relative -mt-10 -mb-10 animate-float "
						/>
					</div>
					<h2 className="md:text-4xl text-3xl font-semibold ">Olá! 👋</h2>
					<h1 className="md:text-4xl text-2xl ">
						{" "}
						Me chamo <span className="text-[#F5D5E0] "> Marcela</span> e{" "}
						<span className="text-[#F5D5E0]"> sou desenvolvedora júnior.</span>
					</h1>
					<div className="md:text-1xl md:mt-4 mt-7 md:flex-row flex flex-col gap-7">
						<button
							className="px-8 py-3 rounded-2xl font-semibold
    text-[#F5D5E0]
    bg-[linear-gradient(135deg,#7B337E_0%,#420D4B_100%)]
    border border-[#F5D5E0]/20
    shadow-[0_0_20px_rgba(123,51,126,0.45)]
    hover:shadow-[0_0_28px_rgba(245,213,224,0.35)]
    hover:scale-[1.03]
    transition cursor-pointer whitespace-nowrap"
						>
							<Link href="/sobre">Sobre mim</Link>
						</button>

						<button
							className="px-8 py-3 rounded-2xl font-semibold
    text-[#F5D5E0]
    bg-[linear-gradient(135deg,#7B337E_0%,#420D4B_100%)]
    border border-[#F5D5E0]/20
    shadow-[0_0_20px_rgba(123,51,126,0.45)]
    hover:shadow-[0_0_28px_rgba(245,213,224,0.35)]
    hover:scale-[1.03]
    transition cursor-pointer whitespace-nowrap"
						>
							<Link href="/projetos">Meus projetos</Link>
						</button>
					</div>
				</div>

				<div
					className="
    
  "
				/>
			</div>
			<div className="relative md:mt-44 md:right-22 hidden md:block">
				<div
					className="
      absolute inset-0
      bg-[radial-gradient(circle,#F5D5E0_0%,transparent_70%)]
      blur-3xl opacity-20
    "
				/>

				<Image
					alt="imagem computador"
					src="/fotohero.png"
					width={800}
					height={800}
					className="relative z-10 animate-float "
				/>
			</div>
		</section>
	);
}
