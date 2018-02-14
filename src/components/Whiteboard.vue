<template lang="pug">
  .whiteboard
    svg(
        key="whiteboard"
        @mousedown="onMouseDown"
        @mousemove="onMouseMove"
        @mouseup="onMouseUp"
      )
      polyline(
          v-for="path in paths"
          :key="path.id"
          :transform="`translate(${path.x} ${path.y}) scale(${path.scale})`"
          :points="pointsArrayToString(path.points)"
          stroke="black"
          fill="none"
          stroke-width="3"
        )
</template>

<script>
import _ from "lodash";
import Vue from "vue";

export default Vue.extend({
  name: "Whiteboard",

  props: {},

  data() {
    return {
      left: 0,
      top: 0,
      socket: undefined,
      isMouseDown: false,
      currentPath: [],
      paths: []
    };
  },

  methods: {
    onMouseDown(e) {
      this.isMouseDown = true;
      this.currentPath = [];

      this.paths.push({
        id: _.get(_.last(this.paths), "id", 0),
        x: 0,
        y: 0,
        scale: 1,
        points: this.currentPath
      });
      this.onMouseMove(e);
    },
    onMouseMove(e) {
      if (!this.isMouseDown) {
        return;
      }

      this.currentPath.push(`${e.clientX - this.left},${e.clientY - this.top}`);
    },
    onMouseUp(e) {
      this.onMouseMove(e);
      this.isMouseDown = false;
    },
    pointsArrayToString(pointsArray) {
      return _.join(pointsArray, " ");
    }
  },

  mounted() {
    const bounds = this.$el.getBoundingClientRect();
    this.left = bounds.left;
    this.top = bounds.top;
  }
});
</script>

<style scoped lang="stylus">
.whiteboard, .whiteboard svg
  width: 100vw
  height: 100vh
</style>
