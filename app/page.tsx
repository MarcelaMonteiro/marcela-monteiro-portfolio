import Hero from "@/components/Hero";
import Sobre from "./sobre/page";
import Projetos from "./projetos/page";
import Contato from "./contato/page";
import Footer from "@/components/Footer";
import Conhecimentos from "./conhecimentos/page";

export default function Home() {
	return (
		<main className="">
			<section className="min-h-screen snap-start">
				<Hero />
			</section>

			<section className="min-h-screen snap-start">
				<Sobre />
			</section>

			<section className="min-h-screen snap-start">
				<Projetos />
			</section>
			<section className="min-h-screen snap-start">
				<Conhecimentos />
			</section>

			<section className="min-h-screen snap-start">
				<Contato />
			</section>

			<section className="snap-start">
				<Footer />
			</section>
		</main>
	);
}
