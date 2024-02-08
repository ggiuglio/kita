import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function afterUpdate() {
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
function set_read_implementation(fn) {
}
function set_manifest(_) {
}
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!doctype html>\n<html lang="en">\n	\n	<head>\n	\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n\n		<title>Folli Folletti</title>\n		<meta charset="utf-8">\n		<meta http-equiv="X-UA-Compatible" content="IE=edge">\n		<meta name="viewport" content="width=device-width, initial-scale=1.0">\n		<meta name="format-detection" content="telephone=no">\n		<meta name="apple-mobile-web-app-capable" content="yes">\n		<meta name="author" content="">\n		<meta name="keywords" content="">\n		<meta name="description" content="">\n	  \n		' + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n			<symbol xmlns="http://www.w3.org/2000/svg" id="arrow-right-tail" viewBox="0 0 31 24" fill="none">\n			  <path d="M18.7732 1.5L29 12M29 12L18.7732 22.5M29 12H0" stroke="#FAA808" stroke-width="2" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="arrow-left" viewBox="0 0 24 24">\n			  <path fill="currentColor"\n				d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="arrow-right" viewBox="0 0 24 24">\n			  <path fill="currentColor"\n				d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="navbar-icon" viewBox="0 0 16 16">\n			  <path\n				d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/symbol" id="location" viewBox="0 0 24 24">\n			  <path fill="currentColor" fill-rule="evenodd"\n				d="M3.25 10.143C3.25 5.244 7.155 1.25 12 1.25c4.845 0 8.75 3.994 8.75 8.893c0 2.365-.674 4.905-1.866 7.099c-1.19 2.191-2.928 4.095-5.103 5.112a4.2 4.2 0 0 1-3.562 0c-2.175-1.017-3.913-2.92-5.103-5.112c-1.192-2.194-1.866-4.734-1.866-7.099M12 2.75c-3.992 0-7.25 3.297-7.25 7.393c0 2.097.603 4.392 1.684 6.383c1.082 1.993 2.612 3.624 4.42 4.469a2.7 2.7 0 0 0 2.291 0c1.809-.845 3.339-2.476 4.421-4.469c1.081-1.99 1.684-4.286 1.684-6.383c0-4.096-3.258-7.393-7.25-7.393m0 5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 10a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0"\n				clip-rule="evenodd" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="phone" viewBox="0 0 24 24">\n			  <path fill="currentColor" fill-rule="evenodd"\n				d="M4.718 3.092c1.226-1.291 3.254-1.05 4.268.384l1.26 1.784c.811 1.147.743 2.74-.225 3.76l-.245.257a.25.25 0 0 0-.002.006c-.013.036-.045.152-.013.372c.067.455.418 1.381 1.846 2.884c1.432 1.508 2.3 1.863 2.703 1.929a.608.608 0 0 0 .294-.007l.408-.43c.874-.92 2.236-1.101 3.335-.469l1.91 1.1c1.633.94 2.013 3.239.708 4.613l-1.42 1.495c-.443.467-1.048.866-1.795.94c-1.824.18-6.049-.055-10.478-4.719c-4.134-4.351-4.919-8.136-5.018-9.985l.666-.036l-.666.036c-.049-.914.358-1.697.894-2.262zm3.043 1.25c-.512-.724-1.433-.768-1.956-.217l-1.57 1.652c-.33.35-.505.75-.483 1.149c.08 1.51.731 4.952 4.607 9.032c4.064 4.28 7.809 4.4 9.244 4.259c.283-.028.575-.186.854-.48l1.42-1.495c.614-.646.453-1.808-.368-2.28l-1.91-1.1c-.513-.295-1.114-.204-1.499.202l-.456.48l-.527-.501c.527.5.527.501.526.502l-.001.001l-.003.004l-.007.006l-.014.014a1.007 1.007 0 0 1-.136.112c-.08.056-.186.119-.321.172c-.276.109-.64.167-1.091.094c-.878-.142-2.028-.773-3.55-2.376c-1.528-1.608-2.113-2.807-2.243-3.7c-.067-.454-.014-.817.084-1.092a1.591 1.591 0 0 1 .23-.427l.03-.037l.014-.015l.006-.007l.003-.003l.002-.001s0-.002.533.503l-.532-.505l.287-.302c.445-.469.51-1.263.088-1.86z"\n				clip-rule="evenodd" />\n			  <path fill="currentColor"\n				d="M13.26 1.88a.751.751 0 0 1 .861-.62c.025.005.107.02.15.03c.085.018.204.048.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a5.727 5.727 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a2.82 2.82 0 0 0-.081-.327a7.395 7.395 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262c-1.237-1.238-2.411-1.939-3.262-2.329a7.394 7.394 0 0 0-1.003-.38a5.749 5.749 0 0 0-.318-.08a.759.759 0 0 1-.626-.861" />\n			  <path fill="currentColor" fill-rule="evenodd"\n				d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721l.207-.72h.002l.004.001l.007.002l.02.007a2.995 2.995 0 0 1 .233.089c.146.062.345.158.59.303c.49.29 1.157.77 1.942 1.556c.785.785 1.267 1.453 1.556 1.942c.145.245.241.444.304.59a2.968 2.968 0 0 1 .089.233l.006.02l.002.008l.001.003v.002l-.72.207l.721-.206a.75.75 0 0 1-1.44.422l-.003-.01a3.67 3.67 0 0 0-.25-.504c-.224-.377-.626-.947-1.326-1.647c-.7-.7-1.27-1.102-1.646-1.325a3.674 3.674 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.506-.925"\n				clip-rule="evenodd" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="email" viewBox="0 0 20 21" fill="none">\n			  <path fill-rule="evenodd" clip-rule="evenodd"\n				d="M8.28797 3.20898H11.7146C13.2463 3.20898 14.4596 3.20898 15.4088 3.33648C16.3855 3.46815 17.1763 3.74482 17.8005 4.36815C18.4238 4.99232 18.7005 5.78315 18.8321 6.75982C18.9596 7.70982 18.9596 8.92232 18.9596 10.454V10.5473C18.9596 12.079 18.9596 13.2923 18.8321 14.2415C18.7005 15.2182 18.4238 16.009 17.8005 16.6332C17.1763 17.2565 16.3855 17.5332 15.4088 17.6648C14.4588 17.7923 13.2463 17.7923 11.7146 17.7923H8.28797C6.7563 17.7923 5.54297 17.7923 4.5938 17.6648C3.61714 17.5332 2.8263 17.2565 2.20214 16.6332C1.5788 16.009 1.30214 15.2182 1.17047 14.2415C1.04297 13.2915 1.04297 12.079 1.04297 10.5473V10.454C1.04297 8.92232 1.04297 7.70898 1.17047 6.75982C1.30214 5.78315 1.5788 4.99232 2.20214 4.36815C2.8263 3.74482 3.61714 3.46815 4.5938 3.33648C5.5438 3.20898 6.7563 3.20898 8.28797 3.20898ZM4.75964 4.57565C3.9213 4.68815 3.43797 4.89982 3.08464 5.25232C2.73297 5.60482 2.5213 6.08815 2.4088 6.92648C2.2938 7.78315 2.29214 8.91148 2.29214 10.5007C2.29214 12.0898 2.2938 13.2182 2.4088 14.0757C2.5213 14.9132 2.73297 15.3965 3.08547 15.749C3.43797 16.1015 3.9213 16.3132 4.75964 16.4257C5.6163 16.5407 6.74464 16.5423 8.3338 16.5423H11.6671C13.2563 16.5423 14.3855 16.5407 15.2421 16.4257C16.0796 16.3132 16.563 16.1015 16.9155 15.749C17.268 15.3965 17.4796 14.9132 17.5921 14.0748C17.7071 13.2182 17.7088 12.0898 17.7088 10.5007C17.7088 8.91148 17.7071 7.78315 17.5921 6.92565C17.4796 6.08815 17.268 5.60482 16.9155 5.25232C16.563 4.89982 16.0796 4.68815 15.2413 4.57565C14.3855 4.46065 13.2563 4.45898 11.6671 4.45898H8.3338C6.74464 4.45898 5.61714 4.46065 4.75964 4.57565ZM4.52047 6.76732C4.62658 6.64006 4.77889 6.56014 4.94391 6.54514C5.10892 6.53014 5.27315 6.58128 5.40047 6.68732L7.2013 8.18648C7.9788 8.83398 8.51797 9.28232 8.97464 9.57565C9.41547 9.85898 9.71464 9.95482 10.0021 9.95482C10.2896 9.95482 10.5888 9.85982 11.0296 9.57565C11.4855 9.28232 12.0255 8.83398 12.803 8.18648L14.6021 6.68648C14.6652 6.63396 14.738 6.59437 14.8164 6.56998C14.8948 6.54559 14.9772 6.53689 15.059 6.54435C15.1408 6.55182 15.2202 6.57532 15.2929 6.6135C15.3656 6.65169 15.43 6.70381 15.4826 6.7669C15.5351 6.82999 15.5747 6.90281 15.5991 6.9812C15.6234 7.05959 15.6322 7.14201 15.6247 7.22376C15.6172 7.30552 15.5937 7.385 15.5555 7.45767C15.5173 7.53035 15.4652 7.59479 15.4021 7.64732L13.5721 9.17232C12.833 9.78898 12.2346 10.2873 11.7055 10.6273C11.1555 10.9815 10.6196 11.2048 10.0021 11.2048C9.38464 11.2048 8.8488 10.9807 8.29797 10.6273C7.76964 10.2873 7.1713 9.78815 6.43214 9.17315L4.6013 7.64815C4.53817 7.5956 4.48601 7.53112 4.44782 7.45839C4.40962 7.38567 4.38614 7.30613 4.37871 7.22432C4.37128 7.14251 4.38005 7.06004 4.40451 6.98162C4.42898 6.90321 4.46783 6.83038 4.52047 6.76732Z"\n				fill="#FAA808" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="clock" viewBox="0 0 24 24">\n			  <path fill="currentColor" fill-rule="evenodd"\n				d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75"\n				clip-rule="evenodd" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="star" viewBox="0 0 512 512">\n			  <path fill="currentColor"\n				d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="play-circle" viewBox="0 0 24 24">\n			  <path fill="currentColor"\n				d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="earth-outline" viewBox="0 0 24 24">\n			  <path fill="currentColor" fill-rule="evenodd"\n				d="M5.578 5.343a9.25 9.25 0 0 0 6.803 15.9c-.206-.912-.234-2.138.393-3.319c.652-1.229 2.002-1.762 2.995-2.006a9.183 9.183 0 0 1 1.898-.254h.043c1.673-.018 2.426-.562 2.826-1.08c.342-.444.47-.887.602-1.336l.05-.172A9.22 9.22 0 0 0 18.6 5.519a5.486 5.486 0 0 1-.027.1c-.163.594-.425 1.202-.711 1.636c-.256.388-.752.78-1.164 1.076a9.51 9.51 0 0 1-.902.56c-.228.132-.433.25-.63.38c-.432.286-.766.593-.991 1.056a.665.665 0 0 0-.035.49c.075.272.126.578.126.889c.002.649-.328 1.176-.753 1.518a2.41 2.41 0 0 1-1.521.526c-2.455-.027-3.965-2.02-4.164-4.236c-.08-.881-.466-1.773-.954-2.552a8.838 8.838 0 0 0-1.296-1.62m1.167-.956a10.49 10.49 0 0 1 1.4 1.779c.558.89 1.069 2.012 1.177 3.214c.15 1.68 1.213 2.854 2.686 2.87a.91.91 0 0 0 .563-.194c.146-.117.196-.24.195-.346c0-.156-.026-.328-.072-.495a2.163 2.163 0 0 1 .131-1.542c.385-.794.956-1.285 1.514-1.653c.239-.158.487-.3.71-.43l.09-.05c.255-.148.48-.28.683-.427c.431-.31.704-.557.787-.684c.183-.276.388-.734.518-1.207c.103-.374.131-.662.122-.84A9.207 9.207 0 0 0 12 2.75a9.207 9.207 0 0 0-5.255 1.637M22.68 13.24c.047-.407.071-.82.071-1.24c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12S6.063 22.75 12 22.75c5.46 0 9.97-4.071 10.659-9.344a2.89 2.89 0 0 1 .048-.156zm-2.774 3.567c-.596.218-1.314.348-2.179.357h-.031l-.09.003a7.68 7.68 0 0 0-1.477.208c-.902.221-1.693.62-2.029 1.252c-.456.859-.39 1.793-.22 2.432a9.261 9.261 0 0 0 6.026-4.252"\n				clip-rule="evenodd" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="facebook" viewBox="0 0 24 24">\n			  <path fill="currentColor"\n				d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="youtube" viewBox="0 0 32 32">\n			  <path fill="currentColor"\n				d="M29.41 9.26a3.5 3.5 0 0 0-2.47-2.47C24.76 6.2 16 6.2 16 6.2s-8.76 0-10.94.59a3.5 3.5 0 0 0-2.47 2.47A36.13 36.13 0 0 0 2 16a36.13 36.13 0 0 0 .59 6.74a3.5 3.5 0 0 0 2.47 2.47c2.18.59 10.94.59 10.94.59s8.76 0 10.94-.59a3.5 3.5 0 0 0 2.47-2.47A36.13 36.13 0 0 0 30 16a36.13 36.13 0 0 0-.59-6.74ZM13.2 20.2v-8.4l7.27 4.2Z" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="instagram" viewBox="0 0 256 256">\n			  <path fill="currentColor"\n				d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="twitter" viewBox="0 0 24 24">\n			  <path fill="currentColor"\n				d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="linkedin" viewBox="0 0 512 512">\n			  <path fill="currentColor"\n				d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32Zm-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43Zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="search" viewBox="0 0 512 512">\n			  <path fill="currentColor"\n				d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3M97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="arrow-down" viewBox="0 0 16 16">\n			  <path fill-rule="evenodd"\n				d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="plus" viewBox="0 0 16 16">\n			  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />\n			</symbol>\n			<symbol xmlns="http://www.w3.org/2000/svg" id="minus" viewBox="0 0 16 16">\n			  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />\n			</symbol>\n		</svg>\n\n		<div style="display: contents">' + body + "</div>\n\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "38ktb2"
};
async function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  options as c,
  set_private_env as d,
  prerendering as e,
  set_public_env as f,
  get_hooks as g,
  set_safe_public_env as h,
  set_assets as i,
  set_building as j,
  set_manifest as k,
  set_prerendering as l,
  set_read_implementation as m,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
