import Image from "next/image";

export default function TagFechamento() {
	return (
		<Image
			src="/tagdir.png"
			alt="tag de fechamento"
			width={42}
			height={40}
			className="mt-2  drop-shadow-[0_0_15px_rgba(245,213,224,0.8)]"
		></Image>
	);
}
