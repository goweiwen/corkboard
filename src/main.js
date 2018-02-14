// promises polyfill
// weakmap polyfill

import Vue from "vue";
import Buefy from "buefy";
import VueYoutube from "vue-youtube";
import { sync } from "vuex-router-sync";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VueYoutube);

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
