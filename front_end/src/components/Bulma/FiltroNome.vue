<template>
  <input
    v-if="$store.state.filtroAtual == 'nomeVendedor'"
    class="input is-link"
    type="text"
    placeholder="digite o nome do vendedor"
    v-model="text"
  />

  <input
    v-else
    class="input is-link"
    type="text"
    placeholder="digite o nome do cliente"
    v-model="text"
  />
</template>

<script>
export default {
  computed: {
    text: {
      get() {
        return this.$store.state.textFiltro;
      },

      set(newValue) {
        this.$store.commit("setFiltroText", newValue);
      },
    },
  },
};
</script>

<style scoped>
input {
  background-color: rgb(233, 205, 44);
  color: black;
}
</style>
