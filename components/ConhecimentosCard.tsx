import Image from "next/image";

type ConhecimentoCardProps = {
	nome: string;
	icone: string;
};

export function ConhecimentosCard({ nome, icone }: ConhecimentoCardProps) {
	return (
		<div className="flex flex-col items-center gap-3">
			<div
				className="
          w-20 h-15
          md:w-24 md:h-24
          flex items-center justify-center
          rounded-2xl
          bg-white/5
          border border-white/10
          backdrop-blur-md
          hover:scale-105 transition
        "
			>
				<Image
					src={icone}
					alt={nome}
					width={70}
					height={70}
					className="object-contain drop-shadow-[0_0_15px_rgba(245,213,224,0.8)]"
				/>
			</div>

			<p className="text-white/80 text-sm md:text-base font-medium">{nome}</p>
		</div>
	);
}
