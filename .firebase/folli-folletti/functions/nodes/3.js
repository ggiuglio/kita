

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/anmeldung/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.drC8YtNo.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.dyccAXFL.js"];
export const stylesheets = [];
export const fonts = [];
