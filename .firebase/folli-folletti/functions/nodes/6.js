

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/konzeption/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.WUsD3zwP.js","_app/immutable/chunks/scheduler.nbMXiIID.js","_app/immutable/chunks/index.fS6rgvEl.js"];
export const stylesheets = [];
export const fonts = [];
