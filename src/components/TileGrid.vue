<template lang="pug">
  ul.tiles
    li.tile(v-for="tile in tiles")
      Tile(:tile="tile")
</template>

<script>
import Tile from "./Tile";

export default {
  name: "tile-grid",

  components: { Tile },

  props: {
    tiles: { type: Array, default: () => [] }
  }
};
</script>

<style lang="stylus" scoped>
ul.tiles
  margin: 0
  padding: 0

  li.tile
    list-style: none
</style>
