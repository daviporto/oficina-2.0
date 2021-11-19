<template>
  <table class="table is-hoverable">
    <thead>
      <tr>
        <th><abbr title="cliente">ID</abbr></th>
        <th><abbr title="id">cliente</abbr></th>
        <th><abbr title="data">data</abbr></th>
        <th><abbr title="hora">hora</abbr></th>
        <th><abbr title="vendedor">vendedor</abbr></th>
        <th><abbr title="descricao">descricao</abbr></th>
        <th><abbr title="valor">valor</abbr></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(venda, indice) in $store.state.vendas"
        :key="indice"
        @click="editarCadastro(venda.id)"
      >
        <th>{{ venda.id }}</th>
        <td>{{ venda.cliente }}</td>
        <td>{{ venda.data }}</td>
        <td>{{ venda.hora }}</td>
        <td>{{ venda.vendedor }}</td>
        <td>{{ venda.descricao }}</td>
        <td>{{ venda.valor }}</td>
      </tr>
    </tbody>
  </table>
</template>



<script>
import router from "../../router/index"
export default{
  mounted: function (){ this.$store.dispatch("getVendas")},
};
</script>

<style>
table{
  height: 0vmax;
}
</style>


