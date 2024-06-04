window.addEventListener("DOMContentLoaded", async () => {
	await loadSnowPreset(tsParticles);
	await tsParticles.load({
		id: "tsparticles",
		options: {
			preset: "snow",
			background: {
				color: {
					value: "#2c2b2b",
				},
			},
			particles: {
				size: {
					value: { min: 1, max: 3 },
				},
				move: {
					speed: 0,
				},
			},
			fullScreen: {
				enable: false,
				zIndex: -1,
			},
		},
	});
});
