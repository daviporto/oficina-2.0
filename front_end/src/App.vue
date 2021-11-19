<template>
  <section id="background">
    <Notificacao id='notificacao' v-if="$store.state.notificacaoAberta"></Notificacao>
    <router-view />
  </section>
</template>
<script>
import Notificacao from "./components/Bulma/Notificacao.vue"
export default({
    components: {Notificacao},
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #dfde92;
}
#notificacao{
position: absolute;
top: 0px;
width: 100%;
z-index: 10;
}


</style>
