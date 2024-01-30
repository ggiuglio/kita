

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.lKc7dRA-.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.dyccAXFL.js","_app/immutable/chunks/entry.uqdVahRZ.js"];
export const stylesheets = [];
export const fonts = [];
