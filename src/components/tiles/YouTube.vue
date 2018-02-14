<template lang="pug">
  .youtube
    youtube(:videoId="videoId")
</template>

<script>
export default {
  name: "youtube-tile",

  props: {
    videoId: String
  }
};
</script>

<style lang="stylus" scoped>
.youtube
  position: relative
  padding-bottom: 56.25%
  padding-top: 25px
  height: 0
</style>

<style lang="stylus">
.youtube iframe
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
</style>
