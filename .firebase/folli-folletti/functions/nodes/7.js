

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/partner/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.MObvTsBL.js","_app/immutable/chunks/scheduler.nbMXiIID.js","_app/immutable/chunks/index.fS6rgvEl.js"];
export const stylesheets = [];
export const fonts = [];
