
<template lang="pug">
  nav.navbar
    .navbar-menu
      .navbar-start
      .navbar-end
        .navbar-item
          img.image.is-96x96(:src="user.photoURL")
        span.navbar-item {{ user.name }}
</template>

<script>
import firebase from "firebase";

export default {
  name: "",

  data() {
    return {
      user: {
        name: "",
        uid: "",
        photoURL: ""
      }
    };
  },

  created() {
    const user = firebase.auth().currentUser;
    if (user) {
      this.user = {
        name: user.displayName,
        uid: user.uid,
        photoURL: user.photoURL
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
