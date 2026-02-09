import Image from "next/image";

export default function TagAbertura() {
	return (
		<Image
			src="/tagesq.png"
			alt="tag de abertura"
			width={35}
			height={32}
			className="mt-2  drop-shadow-[0_0_15px_rgba(245,213,224,0.8)]"
		></Image>
	);
}
