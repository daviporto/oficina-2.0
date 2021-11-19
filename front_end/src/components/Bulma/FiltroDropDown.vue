<template>
  <div class="dropdown is-active">
    <div class="dropdown-trigger">
      <button
        id="filtros"
        @click="$store.commit('SwitchDropDownMenu')"
        class="button is-link"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <span>filtros</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div
      class="dropdown-menu"
      id="dropdown-menu"
      role="menu"
      v-if="$store.state.DropDownActive"
    >
      <div class="dropdown-content">
        <a
          href="#"
          class="dropdown-item"
          @click="$store.commit('mudarFiltroAtual', 'nomeVendedor')"
        >
          nome do vendedor
        </a>

        <a
          href="#"
          class="dropdown-item"
          @click="$store.commit('mudarFiltroAtual', 'nomeCliente')"
        >
          nome do cliente
        </a>

        <a
          href="#"
          class="dropdown-item"
          @click="$store.commit('mudarFiltroAtual', 'intervalo')"
        >
          Intervalo
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .dropdown-content{
    background-color: blue;
  
}
.dropdown-content button{
    
} */
</style>



