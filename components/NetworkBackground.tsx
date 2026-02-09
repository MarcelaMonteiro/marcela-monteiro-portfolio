export default function NetworkBackground() {
	return (
		<svg
			className="absolute inset-50 w-full h-full opacity-20 pointer-events-none"
			viewBox="0 0 800 600"
			fill="none"
		>
			{/* Linhas */}
			<path
				d="M100 200 L300 100 L500 250 L650 150"
				stroke="#F5D5E0"
				strokeWidth="1"
				strokeOpacity="0.3"
			/>
			<path
				d="M200 400 L400 300 L600 450"
				stroke="#6667AB"
				strokeWidth="1"
				strokeOpacity="0.25"
			/>

			{/* Pontos */}
			{[
				[100, 200],
				[300, 100],
				[500, 250],
				[650, 150],
				[200, 400],
				[400, 300],
				[600, 450],
			].map(([x, y], i) => (
				<circle key={i} cx={x} cy={y} r="4" fill="#F5D5E0" opacity="0.6">
					{/* animação glow */}
					<animate
						attributeName="opacity"
						values="0.2;0.8;0.2"
						dur="4s"
						repeatCount="indefinite"
					/>
				</circle>
			))}
		</svg>
	);
}
