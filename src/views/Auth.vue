<template lang="pug">
  #firebaseui-auth-container
</template>

<script>
import firebase from "firebase";
import firebaseui from "firebaseui";

import { FIREBASEUI_CONFIG } from "../constants";

export default {
  name: "auth",

  mounted() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", FIREBASEUI_CONFIG);
  }
};
</script>
