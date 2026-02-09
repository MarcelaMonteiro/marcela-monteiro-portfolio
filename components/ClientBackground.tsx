"use client";

import BackgroundParticles from "./BackgroundParticles";

export default function ClientBackground() {
	return (
		<div className="fixed inset-0 -z-10 pointer-events-none">
			<BackgroundParticles />
		</div>
	);
}
