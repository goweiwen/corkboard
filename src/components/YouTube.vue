<template lang="pug">
  .youtube
    youtube(
      :video-id="videoId"
      ref="youtube"
      @playing="onPlay"
      @paused="onPause")
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "YouTube",

  props: {
    videoId: { type: String, required: false }
  },

  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  },

  methods: {
    onPlay() {
      console.log("playing");
    },
    onPause() {
      console.log("paused");
      this.player.playVideo();
    }
  }
});
</script>

<style scoped lang="stylus">
</style>
