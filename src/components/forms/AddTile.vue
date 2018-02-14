<template lang="pug">
  .add-tile
    .modal-card
      header.modal-card-head
        p.modal-card-title Add Tile
      section.modal-card-body
        .type
          b-radio(v-model="type" native-value="markdown") Markdown
          b-radio(v-model="type" native-value="youtube") YouTube
        .markdown(v-if="type == 'markdown'")
          b-field(label="Text")
            b-input(
              type="textarea"
              v-model="text"
              placeholder="https://www.youtube.com/watch?v=A9PKAHRs5ds"
              required)
        .youtube(v-if="type == 'youtube'")
          b-field(label="URL")
            b-input(
              v-model="videoId"
              placeholder="https://www.youtube.com/watch?v=A9PKAHRs5ds"
              required)
      footer.modal-card-foot
        button.button(@click="$parent.close()") Close
        button.button.is-primary(@click="addTile") Add Tile
</template>

<script>
import _ from "lodash";

import { getNewTile } from "@/components/tiles";

export default {
  name: "add-tile-form",

  data() {
    return {
      type: null,
      text: "",
      videoId: ""
    };
  },

  methods: {
    addTile() {
      const newTile = getNewTile(this.type);
      const tile = _.mapValues(newTile, (v, k) => this[k] || v);
      this.$store.dispatch("addTile", { tile });
      this.$parent.close();
    }
  }
};
</script>
