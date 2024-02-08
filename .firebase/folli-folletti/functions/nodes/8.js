

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/spenden/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.nPbrn0en.js","_app/immutable/chunks/scheduler.nbMXiIID.js","_app/immutable/chunks/index.fS6rgvEl.js"];
export const stylesheets = [];
export const fonts = [];
