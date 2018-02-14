import Vue from "vue";
import Router from "vue-router";
import Room from "./views/Room.vue";
import Auth from "./views/Auth.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "room",
      component: Room
    },
    {
      path: "/:roomId",
      name: "room",
      component: Room
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth
    }
  ],
  mode: "history"
});
