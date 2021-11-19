<template>
  <div class="notification is-warning " @click="$store.commit('fecharNotificacao')">
    <button class="delete"></button>
    {{$store.state.notificacaoTexto}}
  </div>
</template>

<style scoped>

</style>