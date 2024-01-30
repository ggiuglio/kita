export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/ajax-loader.gif","css/style.css","css/vendor.css","favicon.png","images/about-img.jpg","images/blog-lg.jpg","images/blog1.jpg","images/blog2.jpg","images/blog3.jpg","images/blog4.jpg","images/chocolat/close.png","images/chocolat/fullscreen-black.png","images/chocolat/fullscreen.png","images/chocolat/left.png","images/chocolat/loader.gif","images/chocolat/right.png","images/class-lg.jpg","images/class1.jpg","images/class2.jpg","images/class3.jpg","images/commentor-item1.jpg","images/commentor-item2.jpg","images/commentor-item3.jpg","images/cta.jpg","images/event-img.jpg","images/event-lg.jpg","images/folli-folletti-logo.png","images/food1.jpg","images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg","images/food8.jpg","images/item1.jpg","images/item2.jpg","images/item3.jpg","images/item4.jpg","images/item5.jpg","images/item6.jpg","images/main-logo.png","images/reviewer1.jpg","images/reviewer2.jpg","images/reviewer3.jpg","images/slider-image.jpg","images/slider-image1.jpg","images/slider-image2.jpg","images/teacher1.jpg","images/teacher2.jpg","images/teacher3.jpg","images/teacher4.jpg","images/team-item1.jpg","images/team-item2.jpg","images/team-item3.jpg","images/team-item4.jpg","images/team-item5.jpg","images/team-item6.jpg","images/testimonial-bg.jpg","js/ajax-loader.gif","js/bootstrap.bundle.min.js","js/jquery-1.11.0.min.js","js/plugins.js","js/script.js"]),
	mimeTypes: {".gif":"image/gif",".css":"text/css",".png":"image/png",".jpg":"image/jpeg",".js":"text/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.DgRfTw5N.js","app":"_app/immutable/entry/app.BuSvj8OG.js","imports":["_app/immutable/entry/start.DgRfTw5N.js","_app/immutable/chunks/entry.uqdVahRZ.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/entry/app.BuSvj8OG.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.dyccAXFL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/anmeldung",
				pattern: /^\/anmeldung\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/geschichte",
				pattern: /^\/geschichte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/impressum",
				pattern: /^\/impressum\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/konzeption",
				pattern: /^\/konzeption\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/partner",
				pattern: /^\/partner\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/spenden",
				pattern: /^\/spenden\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/uber-uns",
				pattern: /^\/uber-uns\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/verein",
				pattern: /^\/verein\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
