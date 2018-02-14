<template lang="pug">
  #app
    router-view
</template>

<script>
import firebase from "firebase";

export default {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.$router.push("/auth");
      }
    });
  }
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

<style lang="stylus">
html
  background-color: #eee

body
  margin: 0
  padding: 0
  background-color: #eee
</style>
