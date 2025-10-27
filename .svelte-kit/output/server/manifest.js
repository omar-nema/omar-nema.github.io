export const manifest = {
	appDir: "internal",
	assets: new Set(["CNAME","assets/about/omar-nema-resume.pdf","assets/arcadia/Arcadia-2017-Referral-networks (1).pdf","assets/arcadia/Arcadia-2018-The-impact-of-care-management.pdf","assets/arcadia/arcadia-2016-hospital-variation (1).pdf","assets/arcadia/cm.png","assets/arcadia/hospitals.png","assets/arcadia/hospitalvar.png","assets/arcadia/referral.png","assets/blackbox/blackbox-recording-prev.PNG","assets/blackbox/blackbox-recording.MP4","assets/blackbox/blackbox.mp4","assets/blackbox/blackbox1.jpg","assets/blackbox/blackbox2.jpg","assets/blackbox/blackbox3.jpg","assets/blackbox/blackbox4.jpg","assets/compSketches/3d-prev-1.png","assets/compSketches/3d-prev-3.png","assets/compSketches/ff-1.png","assets/compSketches/ff-2.png","assets/compSketches/ff-6.png","assets/compSketches/gardenassets.png","assets/compSketches/pixels-2-2.png","assets/compSketches/pixels-2-3.png","assets/compSketches/shape-1.png","assets/compSketches/shape-3.png","assets/dog/dashannotate.png","assets/dog/exp-demo.gif","assets/dog/exp2.png","assets/dog/exp3.png","assets/dog/expconceptres.png","assets/dog/expdemo2.gif","assets/dog/expdemoslow.gif","assets/dog/explains-flat.png","assets/dog/omnimap.png","assets/dog/scan.png","assets/dog/shopist.png","assets/dog/wild1.png","assets/dog/wildannotate.png","assets/dog/wilddouble.png","assets/floatingThoughts/ft1.png","assets/floatingThoughts/ft2.png","assets/floatingThoughts/ft3.png","assets/floatingThoughts/ft4.png","assets/gaze/gaze-1.png","assets/gaze/gaze-2.png","assets/gaze/gaze-3.png","assets/gaze/gaze-cal.png","assets/gaze/gaze1reaction.png","assets/gaze/gaze1revise.png","assets/gaze/gaze2.png","assets/gaze/introRecReally.mp4","assets/gaze/kahlo1.png","assets/gaze/kahlo2.png","assets/gaze/mainDemo.mp4","assets/housing/housing1.png","assets/housing/housing2.png","assets/housing/housing3.png","assets/journal/tp1.png","assets/journal/tp2.png","assets/journal/tp3.png","assets/soundAndSpace/data-parse.png","assets/soundAndSpace/over.png","assets/soundAndSpace/ss0.png","assets/soundAndSpace/ss1.png","assets/soundAndSpace/ss2.png","assets/tellMe/tell.png","assets/tellMe/tell2.png","assets/tellMe/tell3.png","assets/tellMe/tell4.png","assets/thesis/img-integrated.png","assets/thesis/img-thesis.png","assets/thesis/thesis-experiment.png","assets/thesis/thesis-finiteelement.png","assets/thesis/thesis-neural.png","assets/thesis/thesis-parallelization.png","assets/thesis/thesis-process.png","assets/thesis/thesis-transposed.png","assets/thesis/thesis-voltage-distribution.png","assets/thoughtParser/tp1.png","assets/thoughtParser/tp2.png","assets/thoughtParser/tp3.png","favicon.ico","favicon.ico.png","favicon.png"]),
	_: {
		mime: {".pdf":"application/pdf",".png":"image/png",".PNG":"image/png",".MP4":"video/mp4",".mp4":"video/mp4",".jpg":"image/jpeg",".gif":"image/gif",".ico":"image/vnd.microsoft.icon"},
		entry: {"file":"start-7a483dbd.js","js":["start-7a483dbd.js","chunks/vendor-5921274f.js","chunks/paths-28a87002.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/floating-thoughts\/?$/,
				params: null,
				path: "/projects/floating-thoughts",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/thought-parser\/?$/,
				params: null,
				path: "/projects/thought-parser",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/comp-sketches\/?$/,
				params: null,
				path: "/projects/comp-sketches",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/nyc-housing\/?$/,
				params: null,
				path: "/projects/nyc-housing",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/sound-space\/?$/,
				params: null,
				path: "/projects/sound-space",
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/blackbox\/?$/,
				params: null,
				path: "/projects/blackbox",
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/tell-me\/?$/,
				params: null,
				path: "/projects/tell-me",
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/thesis\/?$/,
				params: null,
				path: "/projects/thesis",
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/gaze\/?$/,
				params: null,
				path: "/projects/gaze",
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/work\/?$/,
				params: null,
				path: "/work",
				a: [0,13],
				b: [1]
			}
		]
	}
};
