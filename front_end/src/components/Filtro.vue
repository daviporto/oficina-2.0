<template>
<br>
<div class="columns">
  <div class="column">
   <FiltroDropDown></FiltroDropDown>
   <button id="segundo" class="button is-link" @click.prevent="$store.dispatch('getVendas')">Remover filtros</button>
  </div>
  <div class="column" v-if="$store.state.filtroAtual != 'intervalo'">
    <FiltroNomeCliente ></FiltroNomeCliente>
  </div>
  <div class="column" v-else>
    <FiltroIntervalo></FiltroIntervalo>
  </div>
  <div class="column">
      <button class="button is-link" @click="$store.dispatch('getFiltered')" >filtrar</button>
  </div>
</div>



</template>

<script>
import FiltroDropDown from "./Bulma/FiltroDropDown.vue"
import FiltroNomeCliente from "./Bulma/FiltroNome.vue"
import FiltroIntervalo from "./Bulma/FiltroIntervalo.vue"

export default({
    components: {FiltroDropDown, FiltroNomeCliente,FiltroIntervalo},
})
</script>

<style scoped>
#segundo{
  margin-left: 0.1em;
}
</style>





