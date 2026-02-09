"use client";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function BackgroundParticles() {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		async function init() {
			const { tsParticles } = await import("@tsparticles/engine");
			await loadSlim(tsParticles);
			setReady(true);
		}
		init();
	}, []);

	if (!ready) return null;

	return (
		<Particles
			className="fixed absolute w-full inset-0 z-10 pointer-events-none md:h-[60%]"
			options={{
				fullScreen: { enable: true },

				particles: {
					number: { value: 40 },
					color: { value: ["#F5D5E0", "#7B337E"] },

					links: {
						enable: false,
						opacity: 0.8,
						distance: 120,
						color: "#F5D5E0",
					},

					move: { enable: true, speed: 0.25 },
					size: { value: { min: 1, max: 5 } },
					opacity: { value: 0.3 },
				},
			}}
		/>
	);
}
