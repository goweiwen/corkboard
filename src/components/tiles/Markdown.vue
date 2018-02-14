<template lang="pug">
  .markdown
    span {{ text }}
</template>

<script>
export default {
  name: "markdown-tile",

  props: {
    text: String
  }
};
</script>

<style lang="stylus" scoped>
.markdown
  padding: 10px
</style>
