const c = [
	() => import("../components/layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/projects/floating-thoughts.svelte"),
	() => import("../../../src/routes/projects/thought-parser.svelte"),
	() => import("../../../src/routes/projects/comp-sketches.svelte"),
	() => import("../../../src/routes/projects/nyc-housing.svelte"),
	() => import("../../../src/routes/projects/sound-space.svelte"),
	() => import("../../../src/routes/projects/blackbox.svelte"),
	() => import("../../../src/routes/projects/tell-me.svelte"),
	() => import("../../../src/routes/projects/thesis.svelte"),
	() => import("../../../src/routes/projects/gaze.svelte"),
	() => import("../../../src/routes/about.svelte"),
	() => import("../../../src/routes/work.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/projects/floating-thoughts.svelte
	[/^\/projects\/floating-thoughts\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/projects/thought-parser.svelte
	[/^\/projects\/thought-parser\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/projects/comp-sketches.svelte
	[/^\/projects\/comp-sketches\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/projects/nyc-housing.svelte
	[/^\/projects\/nyc-housing\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/projects/sound-space.svelte
	[/^\/projects\/sound-space\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/projects/blackbox.svelte
	[/^\/projects\/blackbox\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/projects/tell-me.svelte
	[/^\/projects\/tell-me\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/projects/thesis.svelte
	[/^\/projects\/thesis\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/projects/gaze.svelte
	[/^\/projects\/gaze\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/work.svelte
	[/^\/work\/?$/, [c[0], c[13]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];