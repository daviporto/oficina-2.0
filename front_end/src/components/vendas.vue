<template>
  <filtro></filtro>
  <Table></Table>
</template>



<script>
import Table from "./Bulma/Table.vue";
import Filtro from "./Filtro.vue"

export default {
  components: { Table, Filtro },
};
</script>

<style scoped>
table {
  position: relative;
  margin: 0.4em;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.16), 0 0 15px rgba(0, 0, 0, 0.23);
  background-color: #38372a03;
  padding: 15px;
  margin-top: 1em;
  background: #dfc140;
  margin-left: 2em;
  width: 90%;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  margin-bottom: 1em;
}
.cadastro button {
  width: 100%;
}

</style>
