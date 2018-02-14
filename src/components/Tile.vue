<template lang="pug">
  .tile
    button.close-button(@click="deleteTile") Close
    markdown(v-if="tile.type === 'markdown'" :text="tile.text")
    you-tube(v-if="tile.type === 'youtube'" :videoId="tile.videoId")
</template>

<script>
import Markdown from "./tiles/Markdown";
import YouTube from "./tiles/YouTube";

export default {
  name: "tile",

  components: { Markdown, YouTube },

  props: {
    tile: Object
  },

  methods: {
    deleteTile() {
      this.$store.dispatch("deleteTile", { tile: this.tile });
    }
  }
};
</script>

<style lang="stylus" scoped>
.tile
  display: block
  overflow: hidden
  position: relative

  border-radius: 5px
  padding: 0
  margin: 10px

  background: white
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)

.close-button
  position: absolute
  top: 5px
  right: 5px
  z-index: 1
</style>
