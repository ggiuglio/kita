

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/spenden/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.Kb0kPOW2.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.dyccAXFL.js"];
export const stylesheets = [];
export const fonts = [];
