// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import { createApp } from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

/* eslint-disable no-new */

const app = createApp(App)
  // .use(store)

  .use(router);

// globalComponents(app);
// customComponents(app);
app.mount("#app");
