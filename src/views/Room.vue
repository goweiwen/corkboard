<template lang="pug">
  .room
    navbar

    // Add tile form
    button.button(@click="isAddTileModalActive = true") Add tile
    b-modal(:active.sync="isAddTileModalActive" has-modal-card)
      add-tile

    // Main workspace
    tile-grid(:tiles="tiles")
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar";
import AddTile from "@/components/forms/AddTile";
import TileGrid from "@/components/TileGrid";

export default {
  name: "room",

  components: { Navbar, AddTile, TileGrid },

  computed: mapGetters(["tiles"]),

  data() {
    return {
      isAddTileModalActive: false
    };
  },

  created() {
    this.$store.dispatch("setFirebaseRefs");
  }
};
</script>
