

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/impressum/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.EbCwD1ui.js","_app/immutable/chunks/scheduler.nbMXiIID.js","_app/immutable/chunks/index.fS6rgvEl.js"];
export const stylesheets = [];
export const fonts = [];
