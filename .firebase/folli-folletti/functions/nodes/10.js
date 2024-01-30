

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/verein/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.Z7x0QP-V.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.dyccAXFL.js"];
export const stylesheets = [];
export const fonts = [];
