

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DJNTPwzR.js","_app/immutable/chunks/scheduler.nbMXiIID.js","_app/immutable/chunks/index.fS6rgvEl.js","_app/immutable/chunks/jquery.ic7NbDUZ.js"];
export const stylesheets = [];
export const fonts = [];
