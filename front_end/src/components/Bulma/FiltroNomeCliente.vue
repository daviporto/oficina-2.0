<template>
  <input class="input is-link" type="text" placeholder="digite o nome " v-model="text" />
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  computed: {
    text: {
      get() {
        return this.$store.state.textFiltro;
      },

      set(newValue) {
        this.$store.commit("setFiltroText", newValue)
      },
    },
  },
};
</script>
