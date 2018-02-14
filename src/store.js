import Vue from "vue";
import Vuex from "vuex";
import db from "./firebase";
import { firebaseMutations, firebaseAction } from "vuexfire";

import { cleanTile } from "@/components/tiles";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: {
    tiles: []
  },

  mutations: {
    ...firebaseMutations
  },

  actions: {
    addTile({ getters }, { tile }) {
      getters.tilesRef.push(cleanTile(tile));
    },
    deleteTile({ getters }, { tile }) {
      getters.tilesRef.child(tile[".key"]).remove();
    },
    setFirebaseRefs: firebaseAction(({ getters, bindFirebaseRef }) => {
      bindFirebaseRef("tiles", getters.tilesRef, { wait: true });
    })
  },

  getters: {
    tiles: state => state.tiles,
    tilesRef: state =>
      db.ref(`rooms/${state.route.params.roomId || "default"}/tiles`)
  }
});
