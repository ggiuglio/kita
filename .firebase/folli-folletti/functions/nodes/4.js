

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/geschichte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.FOr8dKDC.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.dyccAXFL.js"];
export const stylesheets = [];
export const fonts = [];
