import { init, register, addMessages } from "svelte-i18n";

// Async creates a problem
//  https://github.com/kaisermann/svelte-i18n/issues/51
// register("en", () => import("./en.json"));
// register("de", () => import("./de.json"));

import it from "./it.json";
import de from "./de.json";


addMessages("Italiano", it);
addMessages("Deutsch", de);


init({
  fallbackLocale: "Deutsch",
  initialLocale: "Deutsch",
});
